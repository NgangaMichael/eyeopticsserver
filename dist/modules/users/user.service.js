"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getAllUsers = exports.createUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const repo = __importStar(require("./user.repository"));
/* =========================
   CREATE USER
   ========================= */
const createUser = async (data) => {
    console.log("🔵 Creating user with email:", data.email);
    const hashedPassword = await bcryptjs_1.default.hash(data.password, 10);
    try {
        const user = await repo.createUser({
            ...data,
            password: hashedPassword,
        });
        console.log("✅ User created successfully:", user.id);
        return user;
    }
    catch (error) {
        console.error("❌ Prisma error:", error);
        // Prisma unique constraint violation
        if (error.code === 'P2002') {
            const field = error.meta?.target?.[0] || 'field';
            throw new Error(`A user with this ${field} already exists`);
        }
        throw error;
    }
};
exports.createUser = createUser;
/* =========================
   GET USERS
   ========================= */
const getAllUsers = async () => {
    return repo.getAllUsers();
};
exports.getAllUsers = getAllUsers;
const getUserById = async (id) => {
    const user = await repo.getUserById(id);
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};
exports.getUserById = getUserById;
/* =========================
   UPDATE USER (FIXED)
   ========================= */
const updateUser = async (id, data) => {
    await (0, exports.getUserById)(id);
    if (data.password) {
        data.password = await bcryptjs_1.default.hash(data.password, 10);
    }
    return repo.updateUser(id, data);
};
exports.updateUser = updateUser;
/* =========================
   DELETE USER
   ========================= */
const deleteUser = async (id) => {
    await (0, exports.getUserById)(id);
    return repo.deleteUser(id);
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.service.js.map