import prisma from "../../lib/prisma";

export const createExpense = (data: {
  title: string;
  amount: number;
  category?: string;
  note?: string;
}) => {
  return prisma.expense.create({ data });
};

export const getAllExpenses = () => {
  return prisma.expense.findMany({ orderBy: { createdAt: "desc" } });
};

export const getExpenseById = (id: string) => {
  return prisma.expense.findUnique({ where: { id } });
};

export const updateExpense = (
  id: string,
  data: {
    title?: string;
    amount?: number;
    category?: string;
    note?: string;
  }
) => {
  return prisma.expense.update({ where: { id }, data });
};

export const deleteExpense = (id: string) => {
  return prisma.expense.delete({ where: { id } });
};
