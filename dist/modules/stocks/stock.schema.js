"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStockSchema = exports.createStockSchema = void 0;
const zod_1 = require("zod");
exports.createStockSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(2),
        code: zod_1.z.string().min(2),
        type: zod_1.z.enum(["FRAME", "LENS"]), // Enforce type
        qty: zod_1.z.number().nonnegative(),
        // Lens specific fields
        sph: zod_1.z.number().optional(),
        cyl: zod_1.z.number().optional(),
        priceUsd: zod_1.z.number().positive(),
        priceKsh: zod_1.z.number().positive(),
        appPrice: zod_1.z.number().positive().optional(),
        costUsd: zod_1.z.number().positive().optional(),
        costKsh: zod_1.z.number().positive().optional(),
        prevCostPb: zod_1.z.number().positive().optional(),
        profitPerBale: zod_1.z.number().optional(),
        bought: zod_1.z.string().datetime().optional(),
        etr: zod_1.z.string().datetime().optional(),
        fob: zod_1.z.number().optional(),
        loading: zod_1.z.number().optional(),
        supplier: zod_1.z.string().optional(),
        notes: zod_1.z.string().optional(),
    }),
});
exports.updateStockSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.coerce.number().int().positive(),
    }),
    body: exports.createStockSchema.shape.body.partial(),
});
//# sourceMappingURL=stock.schema.js.map