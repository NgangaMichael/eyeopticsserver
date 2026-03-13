// src/modules/sales/sale.repository.ts
import prisma from "../../lib/prisma";

export const createSale = async (data: any) => {
  return await prisma.$transaction(async (tx) => {
    const subtotal = data.items.reduce((acc: number, item: any) => 
      acc + (Number(item.price) * Number(item.quantity)), 0
    );
    
    const discountAmount = Number(data.discount) || 0;
    const finalTotal = subtotal - discountAmount;

    const sale = await tx.sale.create({
      data: {
        customerId: data.customerId ? Number(data.customerId) : null,
        referenceNumber: data.referenceNumber,
        etimsReceipt: data.etimsReceipt || null, // Added
        etimsAmount: data.etimsAmount || null,   // Added
        total: finalTotal,
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

    for (const item of data.items) {
      await tx.stock.update({
        where: { id: Number(item.stockId) },
        data: { qty: { decrement: Number(item.quantity) } },
      });
    }

    return sale;
  });
};

// New Update function
export const updateSale = async (id: number, data: any) => {
  return await prisma.sale.update({
    where: { id },
    data: {
      etimsReceipt: data.etimsReceipt,
      etimsAmount: data.etimsAmount,
    },
  });
};

export const getAllSales = () => {
  return prisma.sale.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      customer: true,
      patient: true,
      saleitem: {
        include: {
          stock: true,
        },
      },
    },
  });
};

export const getSaleById = (id: number) => {
  return prisma.sale.findUnique({
    where: { id },
    include: {
      customer: true,
      saleitem: { // This was line 71 causing your error!
        include: {
          stock: true,
        },
      },
    },
  });
};

export const deleteSale = (id: number) => {
  return prisma.sale.delete({
    where: { id },
  });
};