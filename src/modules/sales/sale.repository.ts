// src/modules/sales/sale.repository.ts
import prisma from "../../lib/prisma";

export const createSale = async (data: any) => {
  return await prisma.$transaction(async (tx) => {
    const subtotal = data.items.reduce((acc: number, item: any) => 
      acc + (Number(item.price) * Number(item.quantity)), 0
    );
    
    const discountAmount = Number(data.discount) || 0;
    const miscAmount = Number(data.miscellaneous) || 0;
    const finalTotal = subtotal - discountAmount - miscAmount;

    const sale = await tx.sale.create({
      data: {
        customerId: data.customerId ? Number(data.customerId) : null,
        referenceNumber: data.referenceNumber,
        etimsReceipt: data.etimsReceipt || null, 
        etimsAmount: data.etimsAmount || null,   
        total: finalTotal,
        discount: discountAmount,
        miscellaneous: miscAmount,
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

export const updateSale = async (id: number, data: any) => {
  return await prisma.$transaction(async (tx) => {
    const originalSale = await tx.sale.findUnique({
      where: { id },
      include: { saleitem: true }
    });

    if (!originalSale) throw new Error("Sale record not found");

    const updatePayload: any = {
      etimsReceipt: data.etimsReceipt,
      etimsAmount: data.etimsAmount,
    };

    if (data.discount !== undefined || data.miscellaneous !== undefined) {
      const subtotal = originalSale.saleitem.reduce((acc: number, item: any) => 
        acc + (Number(item.price) * Number(item.quantity)), 0
      );
      
      const updatedDiscount = data.discount !== undefined ? (Number(data.discount) || 0) : Number(originalSale.discount || 0);
      const updatedMisc = data.miscellaneous !== undefined ? (Number(data.miscellaneous) || 0) : Number((originalSale as any).miscellaneous || 0);
      
      updatePayload.discount = updatedDiscount;
      updatePayload.miscellaneous = updatedMisc;
      updatePayload.total = subtotal - updatedDiscount - updatedMisc; 
    }

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
      patient: true, // Included patient just in case your views pull customer/patient context here
      saleitem: { 
        include: {
          stock: true,
        },
      },
    },
  });
};

export const bulkUpdateSales = async (updates: any[]) => {
  return await prisma.$transaction(async (tx) => {
    for (const update of updates) {
      const originalSale = await tx.sale.findUnique({
        where: { id: Number(update.id) },
        include: { saleitem: true }
      });

      if (!originalSale) continue;

      // Calculate the strict raw subtotal from the invoice items
      const subtotal = originalSale.saleitem.reduce((acc: number, item: any) => 
        acc + (Number(item.price) * Number(item.quantity)), 0
      );

      const updatedDiscount = Number(update.discount) || 0;
      const existingMisc = Number((originalSale as any).miscellaneous || 0);

      await tx.sale.update({
        where: { id: Number(update.id) },
        data: {
          etimsReceipt: update.etimsReceipt,
          etimsAmount: update.etimsAmount,
          discount: updatedDiscount, // Saves actual currency amount into existing discount column
          total: subtotal - updatedDiscount - existingMisc // Correctly subtracts both metrics
        },
      });
    }
  });
};

export const deleteSale = (id: number) => {
  return prisma.sale.delete({
    where: { id },
  });
};