import * as repo from "./supplier.repository";

export const createSupplier = async (data: any) => {
  return repo.createSupplier(data);
};

export const getAllSuppliers = async () => {
  return repo.getAllSuppliers();
};

export const getSupplierById = async (id: number) => {
  const supplier = await repo.getSupplierById(id);
  if (!supplier) throw new Error("Supplier not found");
  return supplier;
};

export const updateSupplier = async (id: number, data: any) => {
  await getSupplierById(id);
  return repo.updateSupplier(id, data);
};

export const deleteSupplier = async (id: number) => {
  await getSupplierById(id);
  return repo.deleteSupplier(id);
};