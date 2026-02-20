"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateExpenseSchema = exports.createExpenseSchema = void 0;
const zod_1 = require("zod");
exports.createExpenseSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(2),
        amount: zod_1.z.number().positive(),
        category: zod_1.z.string().optional(),
        note: zod_1.z.string().optional(),
    }),
});
exports.updateExpenseSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.coerce.number().int().positive()
    }),
    body: zod_1.z.object({
        title: zod_1.z.string().min(2).optional(),
        amount: zod_1.z.number().positive().optional(),
        category: zod_1.z.string().optional(),
        note: zod_1.z.string().optional(),
    }),
});
//# sourceMappingURL=expense.schema.js.map