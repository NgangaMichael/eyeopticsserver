"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJobCard = exports.getJobCardById = exports.getAllJobCards = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
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
// Raw update and create are now handled via transactions in the service
//# sourceMappingURL=jobcard.repository.js.map