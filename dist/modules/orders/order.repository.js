"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.updateOrder = exports.getOrderById = exports.getAllOrders = exports.createOrder = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const nanoid_1 = require("nanoid");
const createOrder = (data) => {
    // Destructure 'notes' out and collect everything else into 'rest'
    const { notes, ...rest } = data;
    return prisma_1.default.order.create({
        data: {
            name: rest.name,
            // code: rest.code,
            index: rest.index,
            code: `ORD-${(0, nanoid_1.nanoid)(10)}`,
            type: rest.type,
            lensCategory: rest.lensCategory,
            sph: rest.sph ? Number(rest.sph) : null,
            cyl: rest.cyl ? Number(rest.cyl) : null,
            axis: rest.axis ? Number(rest.axis) : null,
            nearAdd: rest.nearAdd ? Number(rest.nearAdd) : null,
            supplierName: rest.supplierName,
            quantityOrdered: Number(rest.quantityOrdered),
            landedCost: Number(rest.landedCost),
            priceKsh: Number(rest.priceKsh || 0),
            priceUsd: Number(rest.priceUsd || 0),
            status: rest.status || "pending",
            // Map any other optional fields explicitly
            supplierEmail: rest.supplierEmail,
            supplierPhone: rest.supplierPhone,
            expectedArrival: rest.expectedArrival ? new Date(rest.expectedArrival) : undefined,
        }
    });
};
exports.createOrder = createOrder;
// Get all orders
const getAllOrders = () => {
    return prisma_1.default.order.findMany({
        orderBy: { createdAt: "desc" },
    });
};
exports.getAllOrders = getAllOrders;
// Get order by ID
const getOrderById = (id) => {
    return prisma_1.default.order.findUnique({
        where: { id },
    });
};
exports.getOrderById = getOrderById;
// Update order
const updateOrder = (id, data) => {
    return prisma_1.default.order.update({
        where: { id },
        data: {
            ...data,
            expectedArrival: data.expectedArrival ? new Date(data.expectedArrival) : undefined,
            receivedDate: data.receivedDate ? new Date(data.receivedDate) : undefined,
        },
    });
};
exports.updateOrder = updateOrder;
// Delete order
const deleteOrder = (id) => {
    return prisma_1.default.order.delete({
        where: { id },
    });
};
exports.deleteOrder = deleteOrder;
//# sourceMappingURL=order.repository.js.map