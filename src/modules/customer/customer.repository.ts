import prisma from "../../lib/prisma";

export const createCustomer = (data: any) => {
  return prisma.customer.create({ data });
};

export const getAllCustomers = () => {
  return prisma.customer.findMany({
    orderBy: { createdAt: "desc" },
    include: { _count: { select: { sales: true } } }
  });
};

export const getCustomerById = (id: number) => {
  return prisma.customer.findUnique({
    where: { id },
    include: { sales: true }
  });
};

export const updateCustomer = (id: number, data: any) => {
  return prisma.customer.update({
    where: { id },
    data,
  });
};

export const deleteCustomer = (id: number) => {
  return prisma.customer.delete({ where: { id } });
};