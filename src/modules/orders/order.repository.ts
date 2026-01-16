import prisma from "../../lib/prisma";

// Create order
export const createOrder = (data: {
  supplierName: string;
  supplierEmail?: string;
  supplierPhone?: string;
  lensType: string;
  material: string;
  coating?: string;
  quantityOrdered: number;
  landedCost: number;
  expectedArrival?: string;
  status: "pending" | "shipped" | "partial" | "received";
}) => {
  return prisma.order.create({ data });
};

// Get all orders
export const getAllOrders = () => {
  return prisma.order.findMany({
    orderBy: { createdAt: "desc" },
  });
};

// Get order by ID
export const getOrderById = (id: number) => {
  return prisma.order.findUnique({
    where: { id },
  });
};

// Update order
export const updateOrder = (
  id: number,
  data: {
    supplierName?: string;
    supplierEmail?: string;
    supplierPhone?: string;
    lensType?: string;
    material?: string;
    coating?: string;
    quantityOrdered?: number;
    quantityReceived?: number;
    landedCost?: number;
    expectedArrival?: string;
    receivedDate?: string;
    status?: "pending" | "shipped" | "partial" | "received";
  }
) => {
  return prisma.order.update({
    where: { id },
    data,
  });
};

// Delete order
export const deleteOrder = (id: number) => {
  return prisma.order.delete({
    where: { id },
  });
};
