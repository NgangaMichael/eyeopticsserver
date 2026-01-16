import * as repo from "./stock.repository";

export const createStock = async (data: any) => {
  return repo.createStock(data);
};

export const getAllStocks = async () => {
  return repo.getAllStocks();
};

export const getStockById = async (id: number) => {
  const stock = await repo.getStockById(id);
  if (!stock) throw { status: 404, message: "Stock not found" };
  return stock;
};

export const updateStock = async (id: number, data: any) => {
  await getStockById(id);
  return repo.updateStock(id, data);
};

export const deleteStock = async (id: number) => {
  await getStockById(id);
  return repo.deleteStock(id);
};
