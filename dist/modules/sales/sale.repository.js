"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSale = exports.getSaleById = exports.getAllSales = exports.createSale = void 0;
// src/modules/sales/sale.repository.ts
const prisma_1 = __importDefault(require("../../lib/prisma"));
const createSale = async (data) => {
    return await prisma_1.default.$transaction(async (tx) => {
        // 1. Calculate the subtotal from items
        const subtotal = data.items.reduce((acc, item) => acc + (Number(item.price) * Number(item.quantity)), 0);
        // 2. Final total is subtotal minus the discount
        const discountAmount = Number(data.discount) || 0;
        const finalTotal = subtotal - discountAmount;
        const sale = await tx.sale.create({
            data: {
                customerId: data.customerId ? Number(data.customerId) : null,
                total: finalTotal,
                discount: discountAmount,
                saleitem: {
                    create: data.items.map((item) => ({
                        stockId: Number(item.stockId),
                        quantity: Number(item.quantity),
                        price: Number(item.price),
                    })),
                },
            },
        });
        // 3. Decrement Stock qty
        for (const item of data.items) {
            await tx.stock.update({
                where: { id: Number(item.stockId) },
                data: {
                    qty: {
                        decrement: Number(item.quantity),
                    },
                },
            });
        }
        return sale;
    });
};
exports.createSale = createSale;
const getAllSales = () => {
    return prisma_1.default.sale.findMany({
        orderBy: { createdAt: "desc" },
        include: {
            customer: true,
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
            saleitem: {
                include: {
                    stock: true,
                },
            },
        },
    });
};
exports.getSaleById = getSaleById;
const deleteSale = (id) => {
    return prisma_1.default.sale.delete({
        where: { id },
    });
};
exports.deleteSale = deleteSale;
//# sourceMappingURL=sale.repository.js.map