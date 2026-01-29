import prisma from "../../lib/prisma";

export const createSupplier = (data: any) => {
  return prisma.supplier.create({ data });
};

export const getAllSuppliers = () => {
  return prisma.supplier.findMany({ orderBy: { name: "asc" } });
};

export const getSupplierById = (id: number) => {
  return prisma.supplier.findUnique({ where: { id } });
};

export const updateSupplier = (id: number, data: any) => {
  return prisma.supplier.update({ where: { id }, data });
};

export const deleteSupplier = (id: number) => {
  return prisma.supplier.delete({ where: { id } });
};