import prisma from "../../lib/prisma";

export const createSale = async (data: {
  customerId: number;
  total: number;
  items: {
    stockId: number;
    quantity: number;
    price: number;
  }[];
}) => {
  return prisma.$transaction(async (tx) => {
    // 1. Create the Sale and the related saleitems
    const newSale = await tx.sale.create({
      data: {
        customerId: data.customerId,
        total: data.total,
        saleitem: { // Matches the schema field name
          create: data.items.map((item) => ({
            stockId: item.stockId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: {
        customer: true,
        saleitem: { // Matches the schema field name
          include: {
            stock: true,
          },
        },
      },
    });

    // 2. Decrement Stock qty
    for (const item of data.items) {
      await tx.stock.update({
        where: { id: item.stockId },
        data: {
          qty: {
            decrement: item.quantity,
          },
        },
      });
    }

    return newSale;
  });
};

export const getAllSales = () => {
  return prisma.sale.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      customer: true,
      saleitem: { // Corrected field name
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