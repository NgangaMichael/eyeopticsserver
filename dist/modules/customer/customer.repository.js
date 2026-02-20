"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomer = exports.updateCustomer = exports.getCustomerById = exports.getAllCustomers = exports.createCustomer = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const createCustomer = (data) => {
    return prisma_1.default.customer.create({ data });
};
exports.createCustomer = createCustomer;
const getAllCustomers = () => {
    return prisma_1.default.customer.findMany({
        orderBy: { createdAt: "desc" },
        include: { _count: { select: { sale: true } } }
    });
};
exports.getAllCustomers = getAllCustomers;
const getCustomerById = (id) => {
    return prisma_1.default.customer.findUnique({
        where: { id },
        include: { sale: true }
    });
};
exports.getCustomerById = getCustomerById;
const updateCustomer = (id, data) => {
    return prisma_1.default.customer.update({
        where: { id },
        data,
    });
};
exports.updateCustomer = updateCustomer;
const deleteCustomer = (id) => {
    return prisma_1.default.customer.delete({ where: { id } });
};
exports.deleteCustomer = deleteCustomer;
//# sourceMappingURL=customer.repository.js.map