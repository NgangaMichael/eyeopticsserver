import * as repo from "./sale.repository";

export const createSale = async (data: {
  customerId: number;
  total: number;
  items: {
    stockId: number;
    quantity: number;
    price: number;
  }[];
}) => {
  return repo.createSale({
    customerId: data.customerId,
    total: data.total,
    items: data.items,
  });
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
