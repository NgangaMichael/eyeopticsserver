import * as repo from "./jobcard.repository";
import prisma from "../../lib/prisma";

// 1. Helper to clean data (Move this to repo if you prefer)
const formatJobCardData = (data: any) => ({
  jobCardNumber: data.jobCardNumber,
  patientId: Number(data.patientId),
  insuranceCompany: data.insuranceCompany,
  date: data.date ? new Date(data.date) : new Date(),
  rSph: data.rSph,
  rCyl: data.rCyl,
  rAxis: data.rAxis ? Number(data.rAxis) : null,
  rPrism: data.rPrism,
  rBase: data.rBase,
  lSph: data.lSph,
  lCyl: data.lCyl,
  lAxis: data.lAxis ? Number(data.lAxis) : null,
  lPrism: data.lPrism,
  lBase: data.lBase,
  nearAdd: data.nearAdd,
  distPd: data.distPd,
  nearPd: data.nearPd,
  heights: data.heights,
  lenses: data.lenses,
  lensQty: data.lensQty ? Number(data.lensQty) : 0,
  frame: data.frame,
  frameQty: data.frameQty ? Number(data.frameQty) : 0,
  total: Number(data.total),
  advance: Number(data.advance),
  balance: Number(data.balance),
  jobDelDate: data.jobDelDate ? new Date(data.jobDelDate) : null,
  // Ensure these fields exist in your schema if using them:
  frameStockId: data.frameStockId ? Number(data.frameStockId) : null,
  lensStockId: data.lensStockId ? Number(data.lensStockId) : null,
});

// 2. The Logic to sync Stock and Sales
async function syncSaleAndStock(tx: any, patientId: number, total: number, items: any[]) {
  if (items.length === 0) return;

  await tx.sale.create({
    data: {
      total: total,
      patientId: patientId, // Set the Patient ID
      customerId: null,     // Explicitly leave Customer empty
      saleitem: {
        create: items.map(item => ({
          stockId: item.stockId,
          quantity: item.quantity,
          price: item.price
        }))
      }
    }
  });

  // Loop to reduce stock quantity...
  for (const item of items) {
    await tx.stock.update({
      where: { id: item.stockId },
      data: { qty: { decrement: item.quantity } }
    });
  }
}

export const createJobCard = async (data: any) => {
  return await prisma.$transaction(async (tx) => {
    const newJobCard = await tx.jobcard.create({ data: formatJobCardData(data) });
    
    const items = [];
    if (data.frameStockId) {
      items.push({ 
        stockId: Number(data.frameStockId),
        quantity: Number(data.frameQty || 1), 
        price: Number(data.framePrice || 0) // Pull from data
      });
    }
    if (data.lensStockId) {
      items.push({ 
        stockId: Number(data.lensStockId), 
        quantity: Number(data.lensQty || 1), 
        price: Number(data.lensPrice || 0) // Pull from data
      });
    }

    // Add consultation as a "Service" item if your SaleItem supports null stockId
    // Or just pass the total to the Sale record
    await syncSaleAndStock(tx, Number(data.patientId), Number(data.total), items);
    
    return newJobCard;
  });
};

export const updateJobCard = async (id: number, data: any) => {
  return await prisma.$transaction(async (tx) => {
    // 1. Get existing card
    const oldCard = await tx.jobcard.findUnique({ where: { id } });
    if (!oldCard) throw { status: 404, message: "Job Card not found" };

    // 2. ROLLBACK: Use "|| 0" to ensure we don't pass null to increment
    if (oldCard.frameStockId) {
      await tx.stock.update({
        where: { id: oldCard.frameStockId },
        data: { 
          qty: { increment: Number(oldCard.frameQty || 0) } 
        }
      });
    }

    if (oldCard.lensStockId) {
      await tx.stock.update({
        where: { id: oldCard.lensStockId },
        data: { 
          qty: { increment: Number(oldCard.lensQty || 0) } 
        }
      });
    }

    // 3. UPDATE the card
    const updated = await tx.jobcard.update({
      where: { id },
      data: formatJobCardData(data)
    });

    // 4. APPLY NEW STOCK: Use fallback values here too for safety
    if (data.frameStockId) {
      await tx.stock.update({
        where: { id: Number(data.frameStockId) },
        data: { qty: { decrement: Number(data.frameQty || 0) } }
      });
    }
    if (data.lensStockId) {
      await tx.stock.update({
        where: { id: Number(data.lensStockId) },
        data: { qty: { decrement: Number(data.lensQty || 0) } }
      });
    }

    return updated;
  });
};

// THESE WERE MISSING:
export const getAllJobCards = async () => {
  return repo.getAllJobCards();
};

export const getJobCardById = async (id: number) => {
  const card = await repo.getJobCardById(id);
  if (!card) throw { status: 404, message: "Job Card not found" };
  return card;
};

export const deleteJobCard = async (id: number) => {
  const card = await getJobCardById(id); // Check if it exists first
  return repo.deleteJobCard(id);
};