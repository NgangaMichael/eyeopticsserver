"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderSchema = exports.createOrderSchema = void 0;
const zod_1 = require("zod");
exports.createOrderSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Item name is required"),
        code: zod_1.z.string().min(1, "Code is required"),
        type: zod_1.z.string().min(1, "Type is required"),
        sph: zod_1.z.number().optional(),
        cyl: zod_1.z.number().optional(),
        axis: zod_1.z.number().int().min(0).max(180).optional(),
        nearAdd: zod_1.z.number().optional(),
        lensCategory: zod_1.z.enum(["Stock", "Custom"]).optional(),
        index: zod_1.z.string().optional(),
        supplierName: zod_1.z.string().min(2),
        quantityOrdered: zod_1.z.number().positive(),
        landedCost: zod_1.z.number().positive(),
        priceKsh: zod_1.z.number().nonnegative().optional(),
        priceUsd: zod_1.z.number().nonnegative().optional(),
        status: zod_1.z.enum(["pending", "shipped", "partial", "received"]).optional(),
        expectedArrival: zod_1.z.string().optional(),
    }),
});
exports.updateOrderSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.coerce.number().int().positive(),
    }),
    body: zod_1.z.object({
        supplierName: zod_1.z.string().min(2).optional(),
        supplierEmail: zod_1.z.string().email().optional(),
        supplierPhone: zod_1.z.string().optional(),
        lensType: zod_1.z.string().min(2).optional(),
        material: zod_1.z.string().min(2).optional(),
        coating: zod_1.z.string().optional(),
        quantityOrdered: zod_1.z.number().int().positive().optional(),
        quantityReceived: zod_1.z.number().int().nonnegative().optional(),
        landedCost: zod_1.z.number().positive().optional(),
        expectedArrival: zod_1.z.string().optional(),
        receivedDate: zod_1.z.string().optional(),
        status: zod_1.z.enum(["pending", "shipped", "partial", "received"]).optional(),
    }),
});
//# sourceMappingURL=order.schema.js.map