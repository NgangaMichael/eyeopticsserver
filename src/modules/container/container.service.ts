import * as repo from "./container.repository";

export const createContainer = async (data: {
  name: string;
  createdBy: string;
  supplierName: string;
}) => {
  return repo.createContainer(data);
};

export const getAllContainers = async () => {
  return repo.getAllContainers();
};

export const getContainerById = async (id: number) => {
  const container = await repo.getContainerById(id);
  if (!container) throw { status: 404, message: "Container not found" };
  return container;
};

export const updateContainer = async (id: number, data: { name?: string; supplierName?: string }) => {
  const container = await repo.getContainerById(id);
  if (!container) throw { status: 404, message: "Container not found" };
  if (container.status === "received") throw { status: 403, message: "Cannot edit a received container" };
  return repo.updateContainer(id, data);
};

export const deleteContainer = async (id: number) => {
  const container = await repo.getContainerById(id);
  if (!container) throw { status: 404, message: "Container not found" };
  if (container.status === "received") throw { status: 403, message: "Cannot delete a received container" };
  return repo.deleteContainer(id);
};

export const addItemToContainer = async (containerId: number, item: any) => {
  const container = await repo.getContainerById(containerId);
  if (!container) throw { status: 404, message: "Container not found" };
  // if (container.status === "received") throw { status: 403, message: "Cannot add items to a received container" };
  return repo.addItemToContainer(containerId, item);
};

export const bulkAddItems = async (containerId: number, items: any[]) => {
  const container = await repo.getContainerById(containerId);
  if (!container) throw { status: 404, message: "Container not found" };
  // if (container.status === "received") throw { status: 403, message: "Cannot add items to a received container" };
  if (!items || items.length === 0) throw { status: 400, message: "No items provided" };
  return repo.bulkAddItems(containerId, items);
};

export const deleteContainerItem = async (containerId: number, itemId: number) => {
  const container = await repo.getContainerById(containerId);
  if (!container) throw { status: 404, message: "Container not found" };
  if (container.status === "received") throw { status: 403, message: "Cannot remove items from a received container" };
  return repo.deleteContainerItem(itemId);
};

export const receiveContainer = async (id: number) => {
  return repo.receiveContainer(id);
};