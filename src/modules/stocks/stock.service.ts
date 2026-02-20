// src/modules/stocks/stock.service.ts
import prisma from "../../lib/prisma";

export const createStock = (data: any) => {
  return prisma.stock.create({
    data: {
      name: data.name,
      code: data.code,
      type: data.type,
      qty: data.qty,
      priceUsd: data.priceUsd,
      priceKsh: data.priceKsh,
      // Optional fields with null-coalescing
      sph: data.sph ?? null,
      cyl: data.cyl ?? null,
      appPrice: data.appPrice ?? null,
      costUsd: data.costUsd ?? null,
      costKsh: data.costKsh ?? null,
      prevCostPb: data.prevCostPb ?? null,
      profitPerBale: data.profitPerBale ?? null,
      fob: data.fob ?? null,
      loading: data.loading ?? null,
      supplier: data.supplier ?? null,
      notes: data.notes ?? null,
      // Date conversions
      bought: data.bought ? new Date(data.bought) : null,
      etr: data.etr ? new Date(data.etr) : null,
    },
  });
};

export const getAllStock = () => {
  return prisma.stock.findMany({
    where: { isDeleted: false },
    orderBy: { createdAt: "desc" }
  });
};

export const getStockById = (id: number) => {
  return prisma.stock.findUnique({ where: { id } });
};

export const updateStock = (id: number, data: any) => {
  // Create a copy to avoid mutating the original
  const updateData = { ...data };
  
  if (updateData.bought) updateData.bought = new Date(updateData.bought);
  if (updateData.etr) updateData.etr = new Date(updateData.etr);

  return prisma.stock.update({
    where: { id },
    data: updateData,
  });
};

export const deleteStock = (id: number) => {
  // Soft delete as per your requirement
  return prisma.stock.update({
    where: { id },
    data: { isDeleted: true },
  });
};