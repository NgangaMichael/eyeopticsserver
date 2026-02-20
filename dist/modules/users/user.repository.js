"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getAllUsers = exports.createUser = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
/* =========================
   CREATE USER
   ========================= */
const createUser = (data) => {
    return prisma_1.default.user.create({ data });
};
exports.createUser = createUser;
/* =========================
   GET ALL USERS (SAFE)
   ========================= */
const getAllUsers = () => {
    return prisma_1.default.user.findMany({
        orderBy: { createdAt: "desc" },
        select: {
            id: true,
            username: true,
            email: true,
            phone: true,
            designation: true,
            createdAt: true,
        },
    });
};
exports.getAllUsers = getAllUsers;
/* =========================
   GET USER BY ID (SAFE)
   ========================= */
const getUserById = (id) => {
    return prisma_1.default.user.findUnique({
        where: { id },
        select: {
            id: true,
            username: true,
            email: true,
            phone: true,
            designation: true,
            createdAt: true,
        },
    });
};
exports.getUserById = getUserById;
/* =========================
   UPDATE USER
   ========================= */
const updateUser = (id, data) => {
    return prisma_1.default.user.update({
        where: { id },
        data,
    });
};
exports.updateUser = updateUser;
/* =========================
   DELETE USER
   ========================= */
const deleteUser = (id) => {
    return prisma_1.default.user.delete({ where: { id } });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.repository.js.map