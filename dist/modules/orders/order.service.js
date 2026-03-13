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
exports.receiveOrder = exports.deleteOrder = exports.updateOrder = exports.getOrderById = exports.getAllOrders = exports.createOrder = void 0;
const repo = __importStar(require("./order.repository"));
const prisma_1 = __importDefault(require("../../lib/prisma"));
const createOrder = async (data) => {
    return repo.createOrder(data);
};
exports.createOrder = createOrder;
const getAllOrders = async () => {
    return repo.getAllOrders();
};
exports.getAllOrders = getAllOrders;
const getOrderById = async (id) => {
    const order = await repo.getOrderById(id);
    if (!order)
        throw { status: 404, message: "Order not found" };
    return order;
};
exports.getOrderById = getOrderById;
const updateOrder = async (id, data) => {
    // Trigger receive logic if status is changed to received
    if (data.status === "received") {
        return await (0, exports.receiveOrder)(id);
    }
    await (0, exports.getOrderById)(id);
    return repo.updateOrder(id, data);
};
exports.updateOrder = updateOrder;
const deleteOrder = async (id) => {
    await (0, exports.getOrderById)(id);
    return repo.deleteOrder(id);
};
exports.deleteOrder = deleteOrder;
const receiveOrder = async (id) => {
    return await prisma_1.default.$transaction(async (tx) => {
        const order = await tx.order.findUnique({ where: { id } });
        if (!order || order.status === "received")
            throw { status: 400, message: "Invalid Order" };
        const existingStock = await tx.stock.findUnique({ where: { code: order.code } });
        if (existingStock) {
            await tx.stock.update({
                where: { id: existingStock.id },
                data: {
                    qty: { increment: order.quantityOrdered },
                    index: order.index,
                    costKsh: order.landedCost,
                    priceKsh: order.priceKsh,
                    priceUsd: order.priceUsd,
                    sph: order.sph,
                    cyl: order.cyl,
                    axis: order.axis,
                    nearAdd: order.nearAdd
                }
            });
        }
        else {
            // Logic for new stock (Lenses or Frames)
            await tx.stock.create({
                data: {
                    code: order.code,
                    name: order.name,
                    index: order.index,
                    type: order.type,
                    qty: order.quantityOrdered,
                    // PASS THE POWERS HERE:
                    sph: order.sph,
                    cyl: order.cyl,
                    axis: order.axis,
                    nearAdd: order.nearAdd,
                    lensCategory: order.lensCategory,
                    priceUsd: order.priceUsd,
                    priceKsh: order.priceKsh,
                    costKsh: order.landedCost,
                    supplier: order.supplierName,
                }
            });
        }
        return await tx.order.update({
            where: { id },
            data: { status: "received", quantityReceived: order.quantityOrdered, receivedDate: new Date() }
        });
    });
};
exports.receiveOrder = receiveOrder;
//# sourceMappingURL=order.service.js.map