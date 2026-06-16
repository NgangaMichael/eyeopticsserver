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
// src/modules/sales/sale.repository.ts

export const updateSale = async (id: number, data: any) => {
  return await prisma.$transaction(async (tx) => {
    // 1. Fetch original items to calculate subtotal
    const originalSale = await tx.sale.findUnique({
      where: { id },
      include: { saleitem: true }
    });

    if (!originalSale) throw new Error("Sale record not found");

    // 2. Build our database update payload dynamically
    const updatePayload: any = {
      etimsReceipt: data.etimsReceipt,
      etimsAmount: data.etimsAmount,
    };

    // 3. If a new discount is provided, recalculate the net grand total
    if (data.discount !== undefined) {
      const subtotal = originalSale.saleitem.reduce((acc: number, item: any) => 
        acc + (Number(item.price) * Number(item.quantity)), 0
      );
      
      const updatedDiscount = Number(data.discount) || 0;
      
      updatePayload.discount = updatedDiscount;
      updatePayload.total = subtotal - updatedDiscount; // Automatically re-balance total
    }

    // 4. Persist tracking data update
    return await tx.sale.update({
      where: { id },
      data: updatePayload,
    });
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