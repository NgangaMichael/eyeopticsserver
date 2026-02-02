import prisma from "../../lib/prisma";

// Use the fields that actually exist in your Prisma Model
export const createStock = (data: any) => {
  return prisma.stock.create({
    data: {
      name: data.name,
      code: data.code,
      type: data.type,
      qty: data.qty, // Changed from 'quantity'
      priceUsd: data.priceUsd, // Changed from 'price'
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

export const getAllStocks = () => {
  return prisma.stock.findMany({ orderBy: { createdAt: "desc" } });
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
  return prisma.stock.delete({ where: { id } });
};