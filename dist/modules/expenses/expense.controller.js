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
exports.deleteExpense = exports.updateExpense = exports.getExpense = exports.getExpenses = exports.createExpense = void 0;
const service = __importStar(require("./expense.service"));
const createExpense = async (req, res, next) => {
    try {
        const expense = await service.createExpense(req.body);
        res.status(201).json(expense);
    }
    catch (err) {
        next(err);
    }
};
exports.createExpense = createExpense;
const getExpenses = async (req, res, next) => {
    try {
        const expenses = await service.getAllExpenses();
        res.json(expenses);
    }
    catch (err) {
        next(err);
    }
};
exports.getExpenses = getExpenses;
const getExpense = async (req, res, next) => {
    try {
        const expense = await service.getExpenseById(req.params.id);
        res.json(expense);
    }
    catch (err) {
        next(err);
    }
};
exports.getExpense = getExpense;
const updateExpense = async (req, res, next) => {
    try {
        const expense = await service.updateExpense(req.params.id, req.body);
        res.json(expense);
    }
    catch (err) {
        next(err);
    }
};
exports.updateExpense = updateExpense;
const deleteExpense = async (req, res, next) => {
    try {
        await service.deleteExpense(req.params.id);
        res.status(204).send();
    }
    catch (err) {
        next(err);
    }
};
exports.deleteExpense = deleteExpense;
//# sourceMappingURL=expense.controller.js.map