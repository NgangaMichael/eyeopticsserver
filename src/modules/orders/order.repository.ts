import prisma from "../../lib/prisma";
import { nanoid } from 'nanoid';

export const createOrder = (data: any) => {
  // Destructure 'notes' out and collect everything else into 'rest'
  const { notes, ...rest } = data;

  return prisma.order.create({ 
    data: {
      name: rest.name,
      // code: rest.code,
      index: rest.index,
      code:`ORD-${nanoid(10)}`,
      type: rest.type,
      lensCategory: rest.lensCategory,

      sph: rest.sph ? Number(rest.sph) : null,
      cyl: rest.cyl ? Number(rest.cyl) : null,
      axis: rest.axis ? Number(rest.axis) : null, 
      nearAdd: rest.nearAdd ? Number(rest.nearAdd) : null,
      
      supplierName: rest.supplierName,
      quantityOrdered: Number(rest.quantityOrdered),
      landedCost: Number(rest.landedCost),
      priceKsh: Number(rest.priceKsh || 0),
      priceUsd: Number(rest.priceUsd || 0),
      status: rest.status || "pending",
      // Map any other optional fields explicitly
      supplierEmail: rest.supplierEmail,
      supplierPhone: rest.supplierPhone,
      expectedArrival: rest.expectedArrival ? new Date(rest.expectedArrival) : undefined,
    }
  });
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
    code?: string; // Added for uniformity
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
    data: {
      ...data,
      expectedArrival: data.expectedArrival ? new Date(data.expectedArrival) : undefined,
      receivedDate: data.receivedDate ? new Date(data.receivedDate) : undefined,
    },
  });
};

// Delete order
export const deleteOrder = (id: number) => {
  return prisma.order.delete({
    where: { id },
  });
};