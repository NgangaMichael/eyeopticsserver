"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSupplierSchema = void 0;
const zod_1 = require("zod");
exports.createSupplierSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(2),
        email: zod_1.z.string().email().optional().nullable(),
        phone: zod_1.z.string().optional().nullable(),
        address: zod_1.z.string().optional().nullable(),
    }),
});
//# sourceMappingURL=supplier.schema.js.map