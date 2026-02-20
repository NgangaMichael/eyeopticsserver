import prisma from "../../lib/prisma";

// Create a new stock item
export const createStock = (data: any) => {
  return prisma.stock.create({
    data: {
      name: data.name || `${data.brand} ${data.model || ""}`.trim(),
      code: data.code || `AUTO-${Date.now()}`,
      type: data.type || data.itemType,
      qty: data.qty || data.quantity || 0,
      priceKsh: data.priceKsh || data.price || 0,
      priceUsd: data.priceUsd || 0,
      // Optional fields
      sph: data.sph ?? null,
      cyl: data.cyl ?? null,
      notes: data.notes || data.material,
      isDeleted: false
    },
  });
};

// Get all stock items, newest first
export const getAllStocks = () => {
  return prisma.stock.findMany({ 
    where: { isDeleted: false },
    orderBy: { createdAt: "desc" } 
  });
};

// Get a stock item by ID
export const getStockById = (id: number) => {
  return prisma.stock.findUnique({ where: { id } });
};

// Update a stock item
export const updateStock = (id: number, data: any) => {
  return prisma.stock.update({
    where: { id },
    data: {
      ...data,
      // Ensure the update uses schema-compliant names if they are being changed
      qty: data.quantity !== undefined ? data.quantity : data.qty,
      priceKsh: data.price !== undefined ? data.price : data.priceKsh,
    }
  });
};

// Delete a stock item (Soft Delete)
export const deleteStock = (id: number) => {
  return prisma.stock.update({
    where: { id },
    data: { isDeleted: true },
  });
};