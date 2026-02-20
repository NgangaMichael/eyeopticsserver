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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExpense = exports.updateExpense = exports.getExpenseById = exports.getAllExpenses = exports.createExpense = void 0;
const repo = __importStar(require("./expense.repository"));
const createExpense = async (data) => {
    return repo.createExpense(data);
};
exports.createExpense = createExpense;
const getAllExpenses = async () => {
    return repo.getAllExpenses();
};
exports.getAllExpenses = getAllExpenses;
const getExpenseById = async (id) => {
    const expense = await repo.getExpenseById(id);
    if (!expense)
        throw { status: 404, message: "Expense not found" };
    return expense;
};
exports.getExpenseById = getExpenseById;
const updateExpense = async (id, data) => {
    await (0, exports.getExpenseById)(id);
    return repo.updateExpense(id, data);
};
exports.updateExpense = updateExpense;
const deleteExpense = async (id) => {
    await (0, exports.getExpenseById)(id);
    return repo.deleteExpense(id);
};
exports.deleteExpense = deleteExpense;
//# sourceMappingURL=expense.service.js.map