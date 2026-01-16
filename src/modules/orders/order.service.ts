import * as repo from "./order.repository";

export const createOrder = async (data: any) => {
  return repo.createOrder(data);
};

export const getAllOrders = async () => {
  return repo.getAllOrders();
};

export const getOrderById = async (id: number) => {
  const order = await repo.getOrderById(id);
  if (!order) throw { status: 404, message: "Order not found" };
  return order;
};

export const updateOrder = async (id: number, data: any) => {
  await getOrderById(id);
  return repo.updateOrder(id, data);
};

export const deleteOrder = async (id: number) => {
  await getOrderById(id);
  return repo.deleteOrder(id);
};
