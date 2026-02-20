import * as repo from "./sale.repository";
// src/modules/sales/sale.service.ts
import prisma from "../../lib/prisma";

export const createSale = async (data: any) => {
  // You can keep business logic here (like validation)
  // but let the repository handle the Prisma transaction
  return await repo.createSale(data);
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
