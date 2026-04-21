import prisma from "../../lib/prisma";
import { nanoid } from "nanoid";

// ─── Container CRUD ───────────────────────────────────────────────

export const createContainer = (data: {
  name: string;
  createdBy: string;
  supplierName: string;
}) => {
  return prisma.container.create({
    data: {
      code: `CON-${nanoid(8).toUpperCase()}`,
      name: data.name,
      createdBy: data.createdBy,
      supplierName: data.supplierName,
      status: "pending",
    },
  });
};

export const getAllContainers = () => {
  return prisma.container.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      _count: { select: { items: true } },
    },
  });
};

export const getContainerById = (id: number) => {
  return prisma.container.findUnique({
    where: { id },
    include: { items: true },
  });
};

export const updateContainer = (id: number, data: { name?: string; supplierName?: string }) => {
  return prisma.container.update({
    where: { id },
    data,
  });
};

export const deleteContainer = (id: number) => {
  return prisma.container.delete({ where: { id } });
};

// ─── Container Items ──────────────────────────────────────────────

export const addItemToContainer = async (containerId: number, item: any) => {
  const container = await prisma.container.findUnique({ where: { id: containerId } });

  const newItem = await prisma.containerItem.create({
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
    const existing = await prisma.stock.findUnique({ where: { code: item.code } });

    if (existing) {
      await prisma.stock.update({
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
    } else {
      await prisma.stock.create({
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

export const bulkAddItems = (containerId: number, items: any[]) => {
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

  return prisma.containerItem.createMany({ data });
};

export const deleteContainerItem = (itemId: number) => {
  return prisma.containerItem.delete({ where: { id: itemId } });
};

// ─── Receive Container ────────────────────────────────────────────

export const receiveContainer = async (id: number) => {
  return await prisma.$transaction(async (tx) => {
    const container = await tx.container.findUnique({
      where: { id },
      include: { items: true },
    });

    if (!container) throw { status: 404, message: "Container not found" };
    if (container.status === "received") throw { status: 400, message: "Container already received" };
    if (container.items.length === 0) throw { status: 400, message: "Container has no items" };

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
      } else {
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

export const updateContainerItem = async (itemId: number, data: any) => {
  return prisma.containerItem.update({
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