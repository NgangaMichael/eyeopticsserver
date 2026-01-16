import * as repo from "./expense.repository";

export const createExpense = async (data: any) => {
  return repo.createExpense(data);
};

export const getAllExpenses = async () => {
  return repo.getAllExpenses();
};

export const getExpenseById = async (id: string) => {
  const expense = await repo.getExpenseById(id);
  if (!expense) throw { status: 404, message: "Expense not found" };
  return expense;
};

export const updateExpense = async (id: string, data: any) => {
  await getExpenseById(id);
  return repo.updateExpense(id, data);
};

export const deleteExpense = async (id: string) => {
  await getExpenseById(id);
  return repo.deleteExpense(id);
};
