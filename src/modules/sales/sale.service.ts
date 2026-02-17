import * as repo from "./sale.repository";
// src/modules/sales/sale.service.ts
import prisma from "../../lib/prisma";

export const createSale = async (data: any) => {
  return await prisma.$transaction(async (tx) => {
    
    // 1. Calculate the subtotal from the items array
    const subtotal = data.items.reduce((acc: number, item: any) => {
      return acc + (Number(item.price) * Number(item.quantity));
    }, 0);

    // 2. Calculate final total (Subtotal - Discount)
    const discountAmount = Number(data.discount) || 0;
    const finalTotal = subtotal - discountAmount;

    // 3. Create the Sale record
    const sale = await tx.sale.create({
      data: {
        customerId: data.customerId ? Number(data.customerId) : null,
        total: finalTotal,       // This satisfies the Prisma requirement
        discount: discountAmount,
        saleitem: {
          create: data.items.map((item: any) => ({
            stockId: Number(item.stockId),
            quantity: Number(item.quantity),
            price: Number(item.price),
          })),
        },
      },
    });

    // 4. Reduce stock
    for (const item of data.items) {
      await tx.stock.update({
        where: { id: Number(item.stockId) },
        data: {
          qty: { decrement: Number(item.quantity) },
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
