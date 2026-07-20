"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStock = exports.updateStock = exports.getStockById = exports.getAllStock = exports.createStock = void 0;
// src/modules/stocks/stock.service.ts
const prisma_1 = __importDefault(require("../../lib/prisma"));
const createStock = (data) => {
    return prisma_1.default.stock.create({
        data: {
            name: data.name,
            code: data.code,
            type: data.type,
            qty: data.qty,
            priceUsd: data.priceUsd,
            priceKsh: data.priceKsh,
            // Optional fields with null-coalescing
            sph: data.sph ?? null,
            cyl: data.cyl ?? null,
            appPrice: data.appPrice ?? null,
            costUsd: data.costUsd ?? null,
            costKsh: data.costKsh ?? null,
            prevCostPb: data.prevCostPb ?? null,
            profitPerBale: data.profitPerBale ?? null,
            fob: data.fob ?? null,
            loading: data.loading ?? null,
            supplier: data.supplier ?? null,
            notes: data.notes ?? null,
            // Date conversions
            bought: data.bought ? new Date(data.bought) : null,
            etr: data.etr ? new Date(data.etr) : null,
        },
    });
};
exports.createStock = createStock;
// export const getAllStock = () => {
//   return prisma.stock.findMany({
//     where: { isDeleted: false },
//     orderBy: { createdAt: "desc" }
//   });
// };
const getAllStock = (page, pageSize, filters) => {
    const where = {
        isDeleted: false,
        ...(filters.type && { type: filters.type }),
        ...(filters.search && {
            OR: [
                { name: { contains: filters.search } },
                { code: { contains: filters.search } },
            ],
        }),
    };
    return Promise.all([
        prisma_1.default.stock.findMany({
            where,
            orderBy: { createdAt: "desc" },
            skip: (page - 1) * pageSize,
            take: pageSize,
        }),
        prisma_1.default.stock.count({ where }),
    ]);
};
exports.getAllStock = getAllStock;
const getStockById = (id) => {
    return prisma_1.default.stock.findUnique({ where: { id } });
};
exports.getStockById = getStockById;
const updateStock = (id, data) => {
    // Create a copy to avoid mutating the original
    const updateData = { ...data };
    if (updateData.bought)
        updateData.bought = new Date(updateData.bought);
    if (updateData.etr)
        updateData.etr = new Date(updateData.etr);
    return prisma_1.default.stock.update({
        where: { id },
        data: updateData,
    });
};
exports.updateStock = updateStock;
const deleteStock = (id) => {
    // Soft delete as per your requirement
    return prisma_1.default.stock.update({
        where: { id },
        data: { isDeleted: true },
    });
};
exports.deleteStock = deleteStock;
//# sourceMappingURL=stock.service.js.map