import * as repo from "./order.repository";
import prisma from "../../lib/prisma";

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
  // Trigger receive logic if status is changed to received
  if (data.status === "received") {
    return await receiveOrder(id);
  }
  
  await getOrderById(id);
  return repo.updateOrder(id, data);
};

export const deleteOrder = async (id: number) => {
  await getOrderById(id);
  return repo.deleteOrder(id);
};

export const receiveOrder = async (id: number) => {
  return await prisma.$transaction(async (tx) => {
    const order = await tx.order.findUnique({ where: { id } });
    if (!order || order.status === "received") throw { status: 400, message: "Invalid Order" };

    const existingStock = await tx.stock.findUnique({ where: { code: order.code } });

    if (existingStock) {
      // UPDATE existing stock
      await tx.stock.update({
        where: { id: existingStock.id },
        data: { 
          qty: { increment: order.quantityOrdered },
          costKsh: order.landedCost,
          priceKsh: order.priceKsh,
          priceUsd: order.priceUsd
        }
      });
    } else {
      // CREATE NEW stock with Auto-Code logic
      let finalCode = order.code;
      
      if (!finalCode || finalCode === "AUTO") {
        const lastStock = await tx.stock.findFirst({
          where: { code: { startsWith: 'PEO' } },
          orderBy: { code: 'desc' }
        });
        
        const lastNum = lastStock ? parseInt(lastStock.code.replace('PEO', '')) : 0;
        finalCode = `PEO${String(lastNum + 1).padStart(4, '0')}`;
      }

      await tx.stock.create({
        data: {
          code: finalCode,
          name: order.name,
          type: order.type,
          qty: order.quantityOrdered,
          priceUsd: order.priceUsd,
          priceKsh: order.priceKsh,
          costKsh: order.landedCost,
          supplier: order.supplierName,
        }
      });
    }

    return await tx.order.update({
      where: { id },
      data: { status: "received", quantityReceived: order.quantityOrdered, receivedDate: new Date() }
    });
  });
};