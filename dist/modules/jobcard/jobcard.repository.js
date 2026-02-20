"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJobCard = exports.getJobCardById = exports.getAllJobCards = exports.updateJobCard = exports.createJobCard = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const createJobCard = (data) => {
    return prisma_1.default.jobcard.create({
        data: {
            ...data,
            date: data.date ? new Date(data.date) : new Date(),
            jobDelDate: data.jobDelDate ? new Date(data.jobDelDate) : null,
            patientId: Number(data.patientId),
            total: Number(data.total),
            discount: Number(data.discount),
            advance: Number(data.advance),
            balance: Number(data.balance),
            consultation: Number(data.consultation || 0),
            // Handle new quantities
            lensQty: data.lensQty ? Number(data.lensQty) : 1.0,
            lensPrice: data.lensPrice ? Number(data.lensPrice) : 0,
            frameQty: data.frameQty ? Number(data.frameQty) : 1,
            framePrice: data.framePrice ? Number(data.framePrice) : 0,
            // Axis needs to be Int
            rAxis: data.rAxis ? Number(data.rAxis) : null,
            lAxis: data.lAxis ? Number(data.lAxis) : null,
        }
    });
};
exports.createJobCard = createJobCard;
const updateJobCard = (id, data) => {
    const { id: _, patient, createdAt, updatedAt, patientId, ...rest } = data;
    return prisma_1.default.jobcard.update({
        where: { id },
        data: {
            ...rest,
            date: data.date ? new Date(data.date) : undefined,
            jobDelDate: data.jobDelDate ? new Date(data.jobDelDate) : null,
            total: data.total !== undefined ? Number(data.total) : undefined,
            advance: data.advance !== undefined ? Number(data.advance) : undefined,
            balance: data.balance !== undefined ? Number(data.balance) : undefined,
            // Clean the new quantity fields
            lensQty: data.lensQty !== undefined ? Number(data.lensQty) : undefined,
            frameQty: data.frameQty !== undefined ? Number(data.frameQty) : undefined,
            rAxis: data.rAxis ? Number(data.rAxis) : null,
            lAxis: data.lAxis ? Number(data.lAxis) : null,
            patientId: patientId ? Number(patientId) : undefined,
        }
    });
};
exports.updateJobCard = updateJobCard;
const getAllJobCards = () => {
    return prisma_1.default.jobcard.findMany({
        orderBy: { createdAt: "desc" },
        include: { patient: true }
    });
};
exports.getAllJobCards = getAllJobCards;
const getJobCardById = (id) => {
    return prisma_1.default.jobcard.findUnique({
        where: { id },
        include: { patient: true }
    });
};
exports.getJobCardById = getJobCardById;
const deleteJobCard = (id) => {
    return prisma_1.default.jobcard.delete({ where: { id } });
};
exports.deleteJobCard = deleteJobCard;
//# sourceMappingURL=jobcard.repository.js.map