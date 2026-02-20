"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePatientSchema = exports.createPatientSchema = void 0;
const zod_1 = require("zod");
// Create Patient Schema
exports.createPatientSchema = zod_1.z.object({
    body: zod_1.z.object({
        firstName: zod_1.z.string().min(2),
        lastName: zod_1.z.string().min(2),
        email: zod_1.z.string().email().optional(),
        phone: zod_1.z.string().min(6),
        dob: zod_1.z.string().optional(), // date as ISO string
        gender: zod_1.z.enum(["male", "female", "other"]).optional(),
        address: zod_1.z.string().optional(),
    }),
});
// Update Patient Schema
exports.updatePatientSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.coerce.number().int().positive(),
    }),
    body: zod_1.z.object({
        firstName: zod_1.z.string().min(2).optional(),
        lastName: zod_1.z.string().min(2).optional(),
        email: zod_1.z.string().email().optional(),
        phone: zod_1.z.string().min(6).optional(),
        dob: zod_1.z.string().optional(),
        gender: zod_1.z.enum(["male", "female", "other"]).optional(),
        address: zod_1.z.string().optional(),
    }),
});
//# sourceMappingURL=patient.schema.js.map