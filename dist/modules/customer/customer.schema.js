"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCustomerSchema = exports.createCustomerSchema = void 0;
const zod_1 = require("zod");
exports.createCustomerSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(2),
        type: zod_1.z.enum(["patient", "company", "outlet"]),
        email: zod_1.z.string().email().optional().nullable(),
        phone: zod_1.z.string().min(9).optional().nullable(),
        address: zod_1.z.string().optional().nullable(),
    }),
});
exports.updateCustomerSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.coerce.number().int().positive(),
    }),
    body: zod_1.z.object({
        name: zod_1.z.string().min(2).optional(),
        type: zod_1.z.enum(["patient", "company", "outlet"]).optional(),
        email: zod_1.z.string().email().optional().nullable(),
        phone: zod_1.z.string().min(9).optional().nullable(),
        address: zod_1.z.string().optional().nullable(),
    }),
});
//# sourceMappingURL=customer.schema.js.map