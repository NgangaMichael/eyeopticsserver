import prisma from "../../lib/prisma";

// Create a new stock item
export const createStock = (data: {
  itemType: string;
  brand: string;
  model?: string;
  material: string;
  color?: string;
  size?: string;
  type: string;
  coating?: string;
  prescription?: object;
  quantity: number;
  price: number;
}) => {
  return prisma.stock.create({ data });
};

// Get all stock items, newest first
export const getAllStocks = () => {
  return prisma.stock.findMany({ orderBy: { createdAt: "desc" } });
};

// Get a stock item by ID
export const getStockById = (id: number) => {
  return prisma.stock.findUnique({ where: { id } });
};

// Update a stock item
export const updateStock = (
  id: number,
  data: {
    itemType?: string;
    brand?: string;
    model?: string;
    material?: string;
    color?: string;
    size?: string;
    type?: string;
    coating?: string;
    prescription?: object;
    quantity?: number;
    price?: number;
  }
) => {
  return prisma.stock.update({ where: { id }, data });
};

// Delete a stock item
export const deleteStock = (id: number) => {
  return prisma.stock.delete({ where: { id } });
};
