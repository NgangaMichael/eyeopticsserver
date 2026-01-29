import prisma from "../../lib/prisma";

type StockCreateInput = {
  name: string;
  code: string;
  type: string;

  qty: number;
  sold?: number;

  priceUsd: number;
  priceKsh: number;
  appPrice?: number;

  costUsd?: number;
  costKsh?: number;
  prevCostPb?: number;
  profitPerBale?: number;

  bought?: string;
  etr?: string;

  fob?: number;
  loading?: number;

  supplier?: string;
  notes?: string;
  imageUrl?: string;
};

export const createStock = (data: StockCreateInput) => {
  return prisma.stock.create({
    data: {
      ...data,
      bought: data.bought ? new Date(data.bought) : undefined,
      etr: data.etr ? new Date(data.etr) : undefined,
    },
  });
};

export const getAllStocks = () => {
  return prisma.stock.findMany({
    orderBy: { createdAt: "desc" },
  });
};

export const getStockById = (id: number) => {
  return prisma.stock.findUnique({
    where: { id },
  });
};

export const updateStock = (
  id: number,
  data: Partial<StockCreateInput>
) => {
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
  return prisma.stock.delete({
    where: { id },
  });
};