"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSale = exports.getSaleById = exports.getAllSales = exports.createSale = void 0;
const repo = __importStar(require("./sale.repository"));
// src/modules/sales/sale.service.ts
const prisma_1 = __importDefault(require("../../lib/prisma"));
const createSale = async (data) => {
    return await prisma_1.default.$transaction(async (tx) => {
        // 1. Calculate the subtotal from the items array
        const subtotal = data.items.reduce((acc, item) => {
            return acc + (Number(item.price) * Number(item.quantity));
        }, 0);
        // 2. Calculate final total (Subtotal - Discount)
        const discountAmount = Number(data.discount) || 0;
        const finalTotal = subtotal - discountAmount;
        // 3. Create the Sale record
        const sale = await tx.sale.create({
            data: {
                customerId: data.customerId ? Number(data.customerId) : null,
                total: finalTotal, // This satisfies the Prisma requirement
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
        // 4. Reduce stock
        for (const item of data.items) {
            await tx.stock.update({
                where: { id: Number(item.stockId) },
                data: {
                    qty: { decrement: Number(item.quantity) },
                },
            });
        }
        return sale;
    });
};
exports.createSale = createSale;
const getAllSales = async () => {
    return repo.getAllSales();
};
exports.getAllSales = getAllSales;
const getSaleById = async (id) => {
    const sale = await repo.getSaleById(id);
    if (!sale)
        throw { status: 404, message: "Sale not found" };
    return sale;
};
exports.getSaleById = getSaleById;
const deleteSale = async (id) => {
    await (0, exports.getSaleById)(id);
    return repo.deleteSale(id);
};
exports.deleteSale = deleteSale;
//# sourceMappingURL=sale.service.js.map