"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSupplier = exports.updateSupplier = exports.getSupplierById = exports.getAllSuppliers = exports.createSupplier = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const createSupplier = (data) => {
    return prisma_1.default.supplier.create({ data });
};
exports.createSupplier = createSupplier;
const getAllSuppliers = () => {
    return prisma_1.default.supplier.findMany({ orderBy: { name: "asc" } });
};
exports.getAllSuppliers = getAllSuppliers;
const getSupplierById = (id) => {
    return prisma_1.default.supplier.findUnique({ where: { id } });
};
exports.getSupplierById = getSupplierById;
const updateSupplier = (id, data) => {
    return prisma_1.default.supplier.update({ where: { id }, data });
};
exports.updateSupplier = updateSupplier;
const deleteSupplier = (id) => {
    return prisma_1.default.supplier.delete({ where: { id } });
};
exports.deleteSupplier = deleteSupplier;
//# sourceMappingURL=supplier.repository.js.map