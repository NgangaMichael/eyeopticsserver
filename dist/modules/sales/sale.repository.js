"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSale = exports.bulkUpdateSales = exports.getSaleById = exports.getAllSales = exports.updateSale = exports.createSale = void 0;
// src/modules/sales/sale.repository.ts
const prisma_1 = __importDefault(require("../../lib/prisma"));
const createSale = async (data) => {
    return await prisma_1.default.$transaction(async (tx) => {
        const subtotal = data.items.reduce((acc, item) => acc + (Number(item.price) * Number(item.quantity)), 0);
        const discountAmount = Number(data.discount) || 0;
        const miscAmount = Number(data.miscellaneous) || 0;
        const finalTotal = subtotal - discountAmount - miscAmount;
        const sale = await tx.sale.create({
            data: {
                customerId: data.customerId ? Number(data.customerId) : null,
                referenceNumber: data.referenceNumber,
                etimsReceipt: data.etimsReceipt || null,
                etimsAmount: data.etimsAmount || null,
                total: finalTotal,
                discount: discountAmount,
                miscellaneous: miscAmount,
                saleitem: {
                    create: data.items.map((item) => ({
                        stockId: Number(item.stockId),
                        quantity: Number(item.quantity),
                        price: Number(item.price),
                    })),
                },
            },
        });
        for (const item of data.items) {
            await tx.stock.update({
                where: { id: Number(item.stockId) },
                data: { qty: { decrement: Number(item.quantity) } },
            });
        }
        return sale;
    });
};
exports.createSale = createSale;
const updateSale = async (id, data) => {
    return await prisma_1.default.$transaction(async (tx) => {
        const originalSale = await tx.sale.findUnique({
            where: { id },
            include: { saleitem: true }
        });
        if (!originalSale)
            throw new Error("Sale record not found");
        const updatePayload = {
            etimsReceipt: data.etimsReceipt,
            etimsAmount: data.etimsAmount,
        };
        if (data.discount !== undefined || data.miscellaneous !== undefined) {
            const subtotal = originalSale.saleitem.reduce((acc, item) => acc + (Number(item.price) * Number(item.quantity)), 0);
            const updatedDiscount = data.discount !== undefined ? (Number(data.discount) || 0) : Number(originalSale.discount || 0);
            const updatedMisc = data.miscellaneous !== undefined ? (Number(data.miscellaneous) || 0) : Number(originalSale.miscellaneous || 0);
            updatePayload.discount = updatedDiscount;
            updatePayload.miscellaneous = updatedMisc;
            updatePayload.total = subtotal - updatedDiscount - updatedMisc;
        }
        return await tx.sale.update({
            where: { id },
            data: updatePayload,
        });
    });
};
exports.updateSale = updateSale;
const getAllSales = () => {
    return prisma_1.default.sale.findMany({
        orderBy: { createdAt: "desc" },
        include: {
            customer: true,
            patient: true,
            saleitem: {
                include: {
                    stock: true,
                },
            },
        },
    });
};
exports.getAllSales = getAllSales;
const getSaleById = (id) => {
    return prisma_1.default.sale.findUnique({
        where: { id },
        include: {
            customer: true,
            patient: true, // Included patient just in case your views pull customer/patient context here
            saleitem: {
                include: {
                    stock: true,
                },
            },
        },
    });
};
exports.getSaleById = getSaleById;
const bulkUpdateSales = async (updates) => {
    return await prisma_1.default.$transaction(async (tx) => {
        for (const update of updates) {
            const originalSale = await tx.sale.findUnique({
                where: { id: Number(update.id) },
                include: { saleitem: true }
            });
            if (!originalSale)
                continue;
            // Calculate the strict raw subtotal from the invoice items
            const subtotal = originalSale.saleitem.reduce((acc, item) => acc + (Number(item.price) * Number(item.quantity)), 0);
            const updatedDiscount = Number(update.discount) || 0;
            const existingMisc = Number(originalSale.miscellaneous || 0);
            await tx.sale.update({
                where: { id: Number(update.id) },
                data: {
                    etimsReceipt: update.etimsReceipt,
                    etimsAmount: update.etimsAmount,
                    discount: updatedDiscount, // Saves actual currency amount into existing discount column
                    total: subtotal - updatedDiscount - existingMisc // Correctly subtracts both metrics
                },
            });
        }
    });
};
exports.bulkUpdateSales = bulkUpdateSales;
const deleteSale = (id) => {
    return prisma_1.default.sale.delete({
        where: { id },
    });
};
exports.deleteSale = deleteSale;
//# sourceMappingURL=sale.repository.js.map