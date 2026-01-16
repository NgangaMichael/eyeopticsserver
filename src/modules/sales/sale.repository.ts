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
  return prisma.sale.create({
    data: {
      customerId: data.customerId,
      total: data.total,
      items: {
        create: data.items,
      },
    },
    include: {
      customer: true,
      items: {
        include: {
          stock: true,
        },
      },
    },
  });
};

export const getAllSales = () => {
  return prisma.sale.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      customer: true,
      items: {
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
      items: {
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
