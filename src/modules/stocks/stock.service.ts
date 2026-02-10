import prisma from "../../lib/prisma";

// Use the fields that actually exist in your Prisma Model
export const createStock = (data: any) => {
  return prisma.stock.create({
    data: {
      name: data.name,
      code: data.code,
      type: data.type,
      qty: data.qty,
      sph: data.sph ?? null,   // e.g., -2.25
      cyl: data.cyl ?? null,
      priceUsd: data.priceUsd,
      priceKsh: data.priceKsh,
      appPrice: data.appPrice,
      costUsd: data.costUsd,
      costKsh: data.costKsh,
      prevCostPb: data.prevCostPb,
      profitPerBale: data.profitPerBale,
      bought: data.bought ? new Date(data.bought) : undefined,
      etr: data.etr ? new Date(data.etr) : undefined,
      fob: data.fob,
      loading: data.loading,
      supplier: data.supplier,
      notes: data.notes,
    },
  });
};

export const getAllStock = () => {
  return prisma.stock.findMany({
    where: {
      isDeleted: false, // Only get active stock
    },
  });
};

export const getStockById = (id: number) => {
  return prisma.stock.findUnique({ where: { id } });
};

export const updateStock = (id: number, data: any) => {
  return prisma.stock.update({
    where: { id },
    data: {
      ...data,
      bought: data.bought ? new Date(data.bought) : undefined,
      etr: data.etr ? new Date(data.etr) : undefined,
    },
  });
};

export const deleteStock = (id: number) => {
  return prisma.stock.update({
    where: { id },
    data: { isDeleted: true },
  });
};