"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStock = exports.updateStock = exports.getStockById = exports.getAllStocks = exports.createStock = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
// Create a new stock item
const createStock = (data) => {
    return prisma_1.default.stock.create({
        data: {
            name: data.name || `${data.brand} ${data.model || ""}`.trim(),
            code: data.code || `AUTO-${Date.now()}`,
            type: data.type || data.itemType,
            qty: data.qty || data.quantity || 0,
            priceKsh: data.priceKsh || data.price || 0,
            priceUsd: data.priceUsd || 0,
            // Optional fields
            sph: data.sph ?? null,
            cyl: data.cyl ?? null,
            notes: data.notes || data.material,
            isDeleted: false
        },
    });
};
exports.createStock = createStock;
// Get all stock items, newest first
const getAllStocks = () => {
    return prisma_1.default.stock.findMany({
        where: { isDeleted: false },
        orderBy: { createdAt: "desc" }
    });
};
exports.getAllStocks = getAllStocks;
// Get a stock item by ID
const getStockById = (id) => {
    return prisma_1.default.stock.findUnique({ where: { id } });
};
exports.getStockById = getStockById;
// Update a stock item
const updateStock = (id, data) => {
    return prisma_1.default.stock.update({
        where: { id },
        data: {
            ...data,
            // Ensure the update uses schema-compliant names if they are being changed
            qty: data.quantity !== undefined ? data.quantity : data.qty,
            priceKsh: data.price !== undefined ? data.price : data.priceKsh,
        }
    });
};
exports.updateStock = updateStock;
// Delete a stock item (Soft Delete)
const deleteStock = (id) => {
    return prisma_1.default.stock.update({
        where: { id },
        data: { isDeleted: true },
    });
};
exports.deleteStock = deleteStock;
//# sourceMappingURL=stock.repository.js.map