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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSale = exports.bulkUpdateSales = exports.updateSale = exports.getSaleById = exports.getAllSales = exports.createSale = void 0;
const repo = __importStar(require("./sale.repository"));
const createSale = async (data) => {
    // You can keep business logic here (like validation)
    // but let the repository handle the Prisma transaction
    return await repo.createSale(data);
};
exports.createSale = createSale;
const getAllSales = async () => {
    return repo.getAllSales();
};
exports.getAllSales = getAllSales;
const getSaleById = async (id) => {
    const sale = await repo.getSaleById(id);
    if (!sale)
        throw { status: 404, message: "Sale not found" };
    return sale;
};
exports.getSaleById = getSaleById;
const updateSale = async (id, data) => {
    await (0, exports.getSaleById)(id); // Ensure it exists
    return repo.updateSale(id, data);
};
exports.updateSale = updateSale;
const bulkUpdateSales = async (updates) => {
    return await repo.bulkUpdateSales(updates);
};
exports.bulkUpdateSales = bulkUpdateSales;
const deleteSale = async (id) => {
    await (0, exports.getSaleById)(id);
    return repo.deleteSale(id);
};
exports.deleteSale = deleteSale;
//# sourceMappingURL=sale.service.js.map