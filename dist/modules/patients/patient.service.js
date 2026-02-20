"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePatient = exports.updatePatient = exports.getPatientById = exports.getAllPatients = exports.createPatient = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
// Create a new patient
const createPatient = (data) => {
    return prisma_1.default.patient.create({ data });
};
exports.createPatient = createPatient;
// Get all patients, newest first
const getAllPatients = () => {
    return prisma_1.default.patient.findMany({ orderBy: { createdAt: "desc" } });
};
exports.getAllPatients = getAllPatients;
// Get a patient by ID
const getPatientById = (id) => {
    return prisma_1.default.patient.findUnique({ where: { id } });
};
exports.getPatientById = getPatientById;
// Update a patient
const updatePatient = (id, data) => {
    return prisma_1.default.patient.update({ where: { id }, data });
};
exports.updatePatient = updatePatient;
// Delete a patient
const deletePatient = (id) => {
    return prisma_1.default.patient.delete({ where: { id } });
};
exports.deletePatient = deletePatient;
//# sourceMappingURL=patient.service.js.map