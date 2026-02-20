"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExpense = exports.updateExpense = exports.getExpenseById = exports.getAllExpenses = exports.createExpense = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const createExpense = (data) => {
    return prisma_1.default.expense.create({ data });
};
exports.createExpense = createExpense;
const getAllExpenses = () => {
    return prisma_1.default.expense.findMany({ orderBy: { createdAt: "desc" } });
};
exports.getAllExpenses = getAllExpenses;
const getExpenseById = (id) => {
    return prisma_1.default.expense.findUnique({ where: { id } });
};
exports.getExpenseById = getExpenseById;
const updateExpense = (id, data) => {
    return prisma_1.default.expense.update({ where: { id }, data });
};
exports.updateExpense = updateExpense;
const deleteExpense = (id) => {
    return prisma_1.default.expense.delete({ where: { id } });
};
exports.deleteExpense = deleteExpense;
//# sourceMappingURL=expense.repository.js.map