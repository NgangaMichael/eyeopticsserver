import * as repo from "./customer.repository";

export const createCustomer = async (data: any) => {
  return repo.createCustomer(data);
};

export const getAllCustomers = async () => {
  return repo.getAllCustomers();
};

export const getCustomerById = async (id: number) => {
  const customer = await repo.getCustomerById(id);
  if (!customer) throw new Error("Customer not found");
  return customer;
};

export const updateCustomer = async (id: number, data: any) => {
  await getCustomerById(id);
  return repo.updateCustomer(id, data);
};

export const deleteCustomer = async (id: number) => {
  await getCustomerById(id);
  return repo.deleteCustomer(id);
};