"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEtimsSchema = exports.createSaleSchema = void 0;
const zod_1 = require("zod");
// src/modules/sales/sale.schema.ts
exports.createSaleSchema = zod_1.z.object({
    body: zod_1.z.object({
        customerId: zod_1.z.coerce.number().int().positive().optional(),
        referenceNumber: zod_1.z.string().min(1),
        discount: zod_1.z.number().nonnegative().optional(),
        miscellaneous: zod_1.z.number().nonnegative().optional(),
        etimsReceipt: zod_1.z.string().optional(),
        etimsAmount: zod_1.z.number().nonnegative().optional(),
        items: zod_1.z.array(zod_1.z.object({
            stockId: zod_1.z.number().int().positive(),
            quantity: zod_1.z.number().positive(),
            price: zod_1.z.number().positive(),
        })).min(1),
    }),
});
exports.updateEtimsSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.coerce.number().int().positive(),
    }),
    body: zod_1.z.object({
        etimsReceipt: zod_1.z.string().optional().nullable(),
        etimsAmount: zod_1.z.number().nonnegative().optional().nullable(),
        discount: zod_1.z.number().nonnegative().optional(),
        miscellaneous: zod_1.z.number().nonnegative().optional(),
    }),
});
//# sourceMappingURL=sale.schema.js.map