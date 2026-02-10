import * as repo from "./sale.repository";
import prisma from "../../lib/prisma";

// Add this to your sale.repository.ts or service
export const createSale = async (data: any) => {
  return await prisma.$transaction(async (tx) => {
    // 1. Create the Sale record
    const sale = await tx.sale.create({
      data: {
        customerId: data.customerId,
        total: data.total,
        saleitem: {
          create: data.items.map((item: any) => ({
            stockId: item.stockId,
            quantity: item.quantity, // This will be 0.50 or 1.00
            price: item.price,
          })),
        },
      },
    });

    // 2. Loop through items and REDUCE the stock
    for (const item of data.items) {
      await tx.stock.update({
        where: { id: item.stockId },
        data: {
          qty: { decrement: item.quantity },
        },
      });
    }

    return sale;
  });
};

export const getAllSales = async () => {
  return repo.getAllSales();
};

export const getSaleById = async (id: number) => {
  const sale = await repo.getSaleById(id);
  if (!sale) throw { status: 404, message: "Sale not found" };
  return sale;
};

export const deleteSale = async (id: number) => {
  await getSaleById(id);
  return repo.deleteSale(id);
};
