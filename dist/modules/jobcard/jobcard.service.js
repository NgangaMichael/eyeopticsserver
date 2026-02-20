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
exports.deleteJobCard = exports.getJobCardById = exports.getAllJobCards = exports.updateJobCard = exports.createJobCard = void 0;
const repo = __importStar(require("./jobcard.repository"));
const prisma_1 = __importDefault(require("../../lib/prisma"));
// 1. Helper to clean data (Move this to repo if you prefer)
const formatJobCardData = (data) => ({
    jobCardNumber: data.jobCardNumber,
    patientId: Number(data.patientId),
    insuranceCompany: data.insuranceCompany,
    notes: data.notes,
    date: data.date ? new Date(data.date) : new Date(),
    rSph: data.rSph,
    rCyl: data.rCyl,
    rAxis: data.rAxis ? Number(data.rAxis) : null,
    rPrism: data.rPrism,
    rBase: data.rBase,
    lSph: data.lSph,
    lCyl: data.lCyl,
    lAxis: data.lAxis ? Number(data.lAxis) : null,
    lPrism: data.lPrism,
    lBase: data.lBase,
    nearAdd: data.nearAdd,
    distPd: data.distPd,
    nearPd: data.nearPd,
    heights: data.heights,
    lenses: data.lenses,
    lensQty: data.lensQty ? Number(data.lensQty) : 0,
    lensPrice: Number(data.lensPrice || 0),
    frame: data.frame,
    frameQty: data.frameQty ? Number(data.frameQty) : 0,
    framePrice: Number(data.framePrice || 0),
    total: Number(data.total),
    consultation: Number(data.consultation || 0),
    discount: Number(data.discount),
    advance: Number(data.advance),
    balance: Number(data.balance),
    jobDelDate: data.jobDelDate ? new Date(data.jobDelDate) : null,
    // Ensure these fields exist in your schema if using them:
    frameStockId: data.frameStockId ? Number(data.frameStockId) : null,
    lensStockId: data.lensStockId ? Number(data.lensStockId) : null,
});
// 2. The Logic to sync Stock and Sales
async function syncSaleAndStock(tx, patientId, total, items) {
    if (items.length === 0)
        return;
    await tx.sale.create({
        data: {
            total: total,
            patientId: patientId, // Set the Patient ID
            customerId: null, // Explicitly leave Customer empty
            saleitem: {
                create: items.map(item => ({
                    stockId: item.stockId,
                    quantity: item.quantity,
                    price: item.price
                }))
            }
        }
    });
    // Loop to reduce stock quantity...
    for (const item of items) {
        await tx.stock.update({
            where: { id: item.stockId },
            data: { qty: { decrement: item.quantity } }
        });
    }
}
const createJobCard = async (data) => {
    return await prisma_1.default.$transaction(async (tx) => {
        const newJobCard = await tx.jobcard.create({ data: formatJobCardData(data) });
        const items = [];
        if (data.frameStockId) {
            items.push({
                stockId: Number(data.frameStockId),
                quantity: Number(data.frameQty || 1),
                price: Number(data.framePrice || 0) // Pull from data
            });
        }
        if (data.lensStockId) {
            items.push({
                stockId: Number(data.lensStockId),
                quantity: Number(data.lensQty || 1),
                price: Number(data.lensPrice || 0) // Pull from data
            });
        }
        // Add consultation as a "Service" item if your SaleItem supports null stockId
        // Or just pass the total to the Sale record
        await syncSaleAndStock(tx, Number(data.patientId), Number(data.total), items);
        return newJobCard;
    });
};
exports.createJobCard = createJobCard;
const updateJobCard = async (id, data) => {
    return await prisma_1.default.$transaction(async (tx) => {
        // 1. Get existing card
        const oldCard = await tx.jobcard.findUnique({ where: { id } });
        if (!oldCard)
            throw { status: 404, message: "Job Card not found" };
        // 2. ROLLBACK: Use "|| 0" to ensure we don't pass null to increment
        if (oldCard.frameStockId) {
            await tx.stock.update({
                where: { id: oldCard.frameStockId },
                data: {
                    qty: { increment: Number(oldCard.frameQty || 0) }
                }
            });
        }
        if (oldCard.lensStockId) {
            await tx.stock.update({
                where: { id: oldCard.lensStockId },
                data: {
                    qty: { increment: Number(oldCard.lensQty || 0) }
                }
            });
        }
        // 3. UPDATE the card
        const updated = await tx.jobcard.update({
            where: { id },
            data: formatJobCardData(data)
        });
        // 4. APPLY NEW STOCK: Use fallback values here too for safety
        if (data.frameStockId) {
            await tx.stock.update({
                where: { id: Number(data.frameStockId) },
                data: { qty: { decrement: Number(data.frameQty || 0) } }
            });
        }
        if (data.lensStockId) {
            await tx.stock.update({
                where: { id: Number(data.lensStockId) },
                data: { qty: { decrement: Number(data.lensQty || 0) } }
            });
        }
        return updated;
    });
};
exports.updateJobCard = updateJobCard;
// THESE WERE MISSING:
const getAllJobCards = async () => {
    return repo.getAllJobCards();
};
exports.getAllJobCards = getAllJobCards;
const getJobCardById = async (id) => {
    const card = await repo.getJobCardById(id);
    if (!card)
        throw { status: 404, message: "Job Card not found" };
    return card;
};
exports.getJobCardById = getJobCardById;
const deleteJobCard = async (id) => {
    const card = await (0, exports.getJobCardById)(id); // Check if it exists first
    return repo.deleteJobCard(id);
};
exports.deleteJobCard = deleteJobCard;
//# sourceMappingURL=jobcard.service.js.map