"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
/* =========================
   CREATE USER
   ========================= */
exports.createUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        username: zod_1.z.string().min(2),
        designation: zod_1.z.string().min(1).optional(),
        email: zod_1.z.string().email(),
        phone: zod_1.z.string().min(9),
        password: zod_1.z.string().min(6),
    }),
});
/* =========================
   UPDATE USER
   ========================= */
exports.updateUserSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.coerce.number().int().positive(),
    }),
    body: zod_1.z.object({
        username: zod_1.z.string().min(2).optional(),
        designation: zod_1.z.string().min(1).optional(),
        email: zod_1.z.string().email().optional(),
        phone: zod_1.z.string().min(9).optional(),
        password: zod_1.z.string().min(6).optional(),
    }),
});
//# sourceMappingURL=user.schema.js.map