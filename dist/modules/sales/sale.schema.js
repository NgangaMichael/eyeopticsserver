"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSaleSchema = exports.createSaleSchema = void 0;
const zod_1 = require("zod");
// src/modules/sales/sale.schema.ts
exports.createSaleSchema = zod_1.z.object({
    body: zod_1.z.object({
        customerId: zod_1.z.coerce.number().int().positive().optional(),
        referenceNumber: zod_1.z.string().min(1), // Add this line
        discount: zod_1.z.number().nonnegative().optional(),
        items: zod_1.z.array(zod_1.z.object({
            stockId: zod_1.z.number().int().positive(),
            quantity: zod_1.z.number().positive(),
            price: zod_1.z.number().positive(),
        })).min(1),
    }),
});
exports.updateSaleSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.coerce.number().int().positive(),
    }),
    body: zod_1.z.object({
        items: zod_1.z.array(zod_1.z.object({
            stockId: zod_1.z.number().int().positive(),
            quantity: zod_1.z.number().positive(),
            price: zod_1.z.number().positive(),
        })).min(1),
    }),
});
//# sourceMappingURL=sale.schema.js.map