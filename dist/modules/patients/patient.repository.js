"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePatient = exports.updatePatient = exports.getPatientById = exports.getAllPatients = exports.createPatient = void 0;
// src/modules/patients/patient.repository.ts
const prisma_1 = __importDefault(require("../../lib/prisma"));
const createPatient = (data) => {
    return prisma_1.default.patient.create({
        data: {
            ...data,
            // If your schema expects a Date object for dob:
            dob: data.dob ? new Date(data.dob) : null
        }
    });
};
exports.createPatient = createPatient;
const getAllPatients = () => {
    return prisma_1.default.patient.findMany({ orderBy: { createdAt: "desc" } });
};
exports.getAllPatients = getAllPatients;
const getPatientById = (id) => {
    return prisma_1.default.patient.findUnique({ where: { id } });
};
exports.getPatientById = getPatientById;
const updatePatient = (id, data) => {
    return prisma_1.default.patient.update({
        where: { id },
        data: {
            ...data,
            dob: data.dob ? new Date(data.dob) : undefined
        }
    });
};
exports.updatePatient = updatePatient;
const deletePatient = (id) => {
    return prisma_1.default.patient.delete({ where: { id } });
};
exports.deletePatient = deletePatient;
//# sourceMappingURL=patient.repository.js.map