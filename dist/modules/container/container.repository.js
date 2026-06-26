"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateContainerItem = exports.receiveContainer = exports.deleteContainerItem = exports.bulkAddItems = exports.addItemToContainer = exports.deleteContainer = exports.updateContainer = exports.getContainerById = exports.getAllContainers = exports.createContainer = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const nanoid_1 = require("nanoid");
// ─── Container CRUD ───────────────────────────────────────────────
const createContainer = (data) => {
    return prisma_1.default.container.create({
        data: {
            code: `CON-${(0, nanoid_1.nanoid)(8).toUpperCase()}`,
            name: data.name,
            createdBy: data.createdBy,
            supplierName: data.supplierName,
            status: "pending",
        },
    });
};
exports.createContainer = createContainer;
const getAllContainers = () => {
    return prisma_1.default.container.findMany({
        orderBy: { createdAt: "desc" },
        include: {
            _count: { select: { items: true } },
        },
    });
};
exports.getAllContainers = getAllContainers;
const getContainerById = (id) => {
    return prisma_1.default.container.findUnique({
        where: { id },
        include: { items: true },
    });
};
exports.getContainerById = getContainerById;
const updateContainer = (id, data) => {
    return prisma_1.default.container.update({
        where: { id },
        data,
    });
};
exports.updateContainer = updateContainer;
const deleteContainer = (id) => {
    return prisma_1.default.container.delete({ where: { id } });
};
exports.deleteContainer = deleteContainer;
// ─── Container Items ──────────────────────────────────────────────
const addItemToContainer = async (containerId, item) => {
    const container = await prisma_1.default.container.findUnique({ where: { id: containerId } });
    const newItem = await prisma_1.default.containerItem.create({
        data: {
            containerId,
            name: item.name,
            code: item.code,
            type: item.type,
            index: item.index ?? null,
            lensCategory: item.lensCategory ?? null,
            sph: item.sph ?? null,
            cyl: item.cyl ?? null,
            axis: item.axis ?? null,
            nearAdd: item.nearAdd ?? null,
            quantityOrdered: item.quantityOrdered,
            landedCost: item.landedCost,
            priceKsh: item.priceKsh ?? 0,
            costKsh: item.costKsh ?? 0,
            priceUsd: item.priceUsd ?? 0,
            wholesalePrice: item.wholesalePrice ?? null,
        },
    });
    // If container already received, push straight to stock
    if (container?.status === 'received') {
        const existing = await prisma_1.default.stock.findUnique({ where: { code: item.code } });
        if (existing) {
            await prisma_1.default.stock.update({
                where: { code: item.code },
                data: {
                    qty: { increment: item.quantityOrdered },
                    landedCost: item.landedCost,
                    priceKsh: item.priceKsh ?? existing.priceKsh,
                    costKsh: item.costKsh ?? existing.costKsh,
                    priceUsd: item.priceUsd ?? existing.priceUsd,
                    wholesalePrice: item.wholesalePrice ?? existing.wholesalePrice,
                    index: item.index,
                    sph: item.sph,
                    cyl: item.cyl,
                    axis: item.axis,
                    nearAdd: item.nearAdd,
                },
            });
        }
        else {
            await prisma_1.default.stock.create({
                data: {
                    code: item.code,
                    name: item.name,
                    type: item.type,
                    index: item.index,
                    lensCategory: item.lensCategory,
                    qty: item.quantityOrdered,
                    sph: item.sph,
                    cyl: item.cyl,
                    axis: item.axis,
                    nearAdd: item.nearAdd,
                    priceKsh: item.priceKsh ?? 0,
                    costKsh: item.costKsh ?? 0,
                    priceUsd: item.priceUsd ?? 0,
                    wholesalePrice: item.wholesalePrice ?? null,
                    landedCost: item.landedCost,
                    supplier: container.supplierName,
                },
            });
        }
    }
    return newItem;
};
exports.addItemToContainer = addItemToContainer;
const bulkAddItems = (containerId, items) => {
    const data = items.map((item) => ({
        containerId,
        name: item.name,
        code: item.code,
        type: item.type,
        index: item.index ?? null,
        lensCategory: item.lensCategory ?? null,
        sph: item.sph ?? null,
        cyl: item.cyl ?? null,
        axis: item.axis ?? null,
        nearAdd: item.nearAdd ?? null,
        wholesalePrice: item.wholesalePrice ?? null,
        quantityOrdered: Number(item.quantityOrdered) || 1,
        landedCost: Number(item.landedCost) || 0,
        priceKsh: Number(item.priceKsh) || 0,
        costKsh: Number(item.costKsh) || 0,
        priceUsd: Number(item.priceUsd) || 0,
    }));
    return prisma_1.default.containerItem.createMany({ data });
};
exports.bulkAddItems = bulkAddItems;
const deleteContainerItem = (itemId) => {
    return prisma_1.default.containerItem.delete({ where: { id: itemId } });
};
exports.deleteContainerItem = deleteContainerItem;
// ─── Receive Container ────────────────────────────────────────────
const receiveContainer = async (id) => {
    return await prisma_1.default.$transaction(async (tx) => {
        const container = await tx.container.findUnique({
            where: { id },
            include: { items: true },
        });
        if (!container)
            throw { status: 404, message: "Container not found" };
        if (container.status === "received")
            throw { status: 400, message: "Container already received" };
        if (container.items.length === 0)
            throw { status: 400, message: "Container has no items" };
        for (const item of container.items) {
            const existing = await tx.stock.findUnique({ where: { code: item.code } });
            if (existing) {
                await tx.stock.update({
                    where: { code: item.code },
                    data: {
                        qty: { increment: item.quantityOrdered },
                        landedCost: item.landedCost,
                        priceKsh: item.priceKsh,
                        costKsh: item.costKsh,
                        priceUsd: item.priceUsd,
                        index: item.index,
                        sph: item.sph,
                        cyl: item.cyl,
                        axis: item.axis,
                        nearAdd: item.nearAdd,
                        wholesalePrice: item.wholesalePrice,
                    },
                });
            }
            else {
                await tx.stock.create({
                    data: {
                        code: item.code,
                        name: item.name,
                        type: item.type,
                        index: item.index,
                        lensCategory: item.lensCategory,
                        qty: item.quantityOrdered,
                        sph: item.sph,
                        cyl: item.cyl,
                        axis: item.axis,
                        nearAdd: item.nearAdd,
                        wholesalePrice: item.wholesalePrice,
                        priceKsh: item.priceKsh,
                        costKsh: item.costKsh,
                        priceUsd: item.priceUsd,
                        landedCost: item.landedCost,
                        supplier: container.supplierName,
                    },
                });
            }
        }
        return tx.container.update({
            where: { id },
            data: { status: "received" },
        });
    });
};
exports.receiveContainer = receiveContainer;
const updateContainerItem = async (itemId, data) => {
    return prisma_1.default.containerItem.update({
        where: { id: itemId },
        data: {
            name: data.name,
            code: data.code,
            type: data.type,
            index: data.index ?? null,
            lensCategory: data.lensCategory ?? null,
            sph: data.sph ?? null,
            cyl: data.cyl ?? null,
            axis: data.axis ?? null,
            nearAdd: data.nearAdd ?? null,
            quantityOrdered: Number(data.quantityOrdered),
            landedCost: Number(data.landedCost),
            priceKsh: Number(data.priceKsh) || 0,
            costKsh: Number(data.costKsh) || 0,
            priceUsd: Number(data.priceUsd) || 0,
            wholesalePrice: data.wholesalePrice ?? null,
        },
    });
};
exports.updateContainerItem = updateContainerItem;
//# sourceMappingURL=container.repository.js.map