import * as repo from "./jobcard.repository";
import prisma from "../../lib/prisma";

// const formatJobCardData = (data: any) => ({
//   jobCardNumber: data.jobCardNumber,
//   patientId: Number(data.patientId),
//   insuranceCompany: data.insuranceCompany,
//   notes: data.notes,
//   date: data.date ? new Date(data.date) : new Date(),
//   // Prescription
//   rSph: data.rSph, rCyl: data.rCyl, rAxis: data.rAxis ? Number(data.rAxis) : null,
//   rPrism: data.rPrism, rBase: data.rBase,
//   lSph: data.lSph, lCyl: data.lCyl, lAxis: data.lAxis ? Number(data.lAxis) : null,
//   lPrism: data.lPrism, lBase: data.lBase,
//   nearAdd: data.nearAdd, distPd: data.distPd, nearPd: data.nearPd, heights: data.heights,
//   // Split Lenses
//   rLens: data.rLens,
//   rLensStockId: data.rLensStockId ? Number(data.rLensStockId) : null,
//   rLensPrice: Number(data.rLensPrice || 0),
//   lLens: data.lLens,
//   lLensStockId: data.lLensStockId ? Number(data.lLensStockId) : null,
//   lLensPrice: Number(data.lLensPrice || 0),
//   // Frame
//   frame: data.frame,
//   frameQty: Number(data.frameQty || 0),
//   framePrice: Number(data.framePrice || 0),
//   frameStockId: data.frameStockId ? Number(data.frameStockId) : null,
//   // Financials
//   total: Number(data.total),
//   consultation: Number(data.consultation || 0),
//   discount: Number(data.discount || 0),
//   advance: Number(data.advance || 0),
//   balance: Number(data.balance || 0),
//   jobDelDate: data.jobDelDate ? new Date(data.jobDelDate) : null,
// });

const formatJobCardData = (data: any) => {
  // Helper to handle empty strings for numeric/decimal fields
  const parseDecimal = (val: any) => (val === "" || val === undefined || val === null ? null : val);

  return {
    jobCardNumber: data.jobCardNumber,
    patientId: Number(data.patientId),
    insuranceCompany: data.insuranceCompany,
    notes: data.notes,
    date: data.date ? new Date(data.date) : new Date(),
    
    // Prescription: Convert "" to null so Prisma doesn't try to parse them as Decimals
    rSph: parseDecimal(data.rSph),
    rCyl: parseDecimal(data.rCyl),
    rAxis: data.rAxis ? Number(data.rAxis) : null,
    rPrism: parseDecimal(data.rPrism),
    rBase: parseDecimal(data.rBase),
    
    lSph: parseDecimal(data.lSph),
    lCyl: parseDecimal(data.lCyl),
    lAxis: data.lAxis ? Number(data.lAxis) : null,
    lPrism: parseDecimal(data.lPrism),
    lBase: parseDecimal(data.lBase),
    
    // Other clinical measurements
    nearAdd: parseDecimal(data.nearAdd),
    distPd: parseDecimal(data.distPd),
    nearPd: parseDecimal(data.nearPd),
    heights: parseDecimal(data.heights),

    // Split Lenses
    rLens: data.rLens,
    rLensStockId: data.rLensStockId ? Number(data.rLensStockId) : null,
    rLensPrice: Number(data.rLensPrice || 0),
    lLens: data.lLens,
    lLensStockId: data.lLensStockId ? Number(data.lLensStockId) : null,
    lLensPrice: Number(data.lLensPrice || 0),

    // Frame
    frame: data.frame,
    frameQty: Number(data.frameQty || 0),
    framePrice: Number(data.framePrice || 0),
    frameStockId: data.frameStockId ? Number(data.frameStockId) : null,

    // Financials
    total: Number(data.total),
    consultation: Number(data.consultation || 0),
    discount: Number(data.discount || 0),
    advance: Number(data.advance || 0),
    balance: Number(data.balance || 0),
    jobDelDate: data.jobDelDate ? new Date(data.jobDelDate) : null,
  };
};

async function syncSaleAndStock(tx: any, patientId: number, total: number, items: any[]) {
  if (items.length === 0) return;
  await tx.sale.create({
    data: {
      total: total,
      patientId: patientId,
      saleitem: {
        create: items.map(item => ({
          stockId: item.stockId,
          quantity: item.quantity,
          price: item.price
        }))
      }
    }
  });
  for (const item of items) {
    await tx.stock.update({
      where: { id: item.stockId },
      data: { qty: { decrement: item.quantity } }
    });
  }
}

export const createJobCard = async (data: any) => {
  return await prisma.$transaction(async (tx) => {
    const formatted = formatJobCardData(data);
    const newJobCard = await tx.jobcard.create({ data: formatted });
    
    const items = [];
    if (formatted.frameStockId) {
      items.push({ 
        stockId: formatted.frameStockId, 
        quantity: formatted.frameQty, 
        price: formatted.framePrice 
      });
    }

    // UPDATE: Change quantity from 1 to 0.5
    if (formatted.rLensStockId) {
      items.push({ stockId: formatted.rLensStockId, quantity: 0.5, price: formatted.rLensPrice });
    }
    if (formatted.lLensStockId) {
      items.push({ stockId: formatted.lLensStockId, quantity: 0.5, price: formatted.lLensPrice });
    }

    await syncSaleAndStock(tx, formatted.patientId, formatted.total, items);
    return newJobCard;
  });
};

export const updateJobCard = async (id: number, data: any) => {
  return await prisma.$transaction(async (tx) => {
    const oldCard = await tx.jobcard.findUnique({ where: { id } });
    if (!oldCard) throw new Error("Job Card not found");

    // 1. ROLLBACK: Put back 0.5 units for lenses
    if (oldCard.frameStockId) {
      await tx.stock.update({ where: { id: oldCard.frameStockId }, data: { qty: { increment: Number(oldCard.frameQty) } } });
    }
    if (oldCard.rLensStockId) {
      await tx.stock.update({ where: { id: oldCard.rLensStockId }, data: { qty: { increment: 0.5 } } });
    }
    if (oldCard.lLensStockId) {
      await tx.stock.update({ where: { id: oldCard.lLensStockId }, data: { qty: { increment: 0.5 } } });
    }

    // 2. UPDATE JOBCARD
    const formatted = formatJobCardData(data);
    const updated = await tx.jobcard.update({ where: { id }, data: formatted });

    // 3. DEDUCT NEW STOCK: Deduct 0.5 units for lenses
    if (formatted.frameStockId) {
      await tx.stock.update({ where: { id: formatted.frameStockId }, data: { qty: { decrement: formatted.frameQty } } });
    }
    if (formatted.rLensStockId) {
      await tx.stock.update({ where: { id: formatted.rLensStockId }, data: { qty: { decrement: 0.5 } } });
    }
    if (formatted.lLensStockId) {
      await tx.stock.update({ where: { id: formatted.lLensStockId }, data: { qty: { decrement: 0.5 } } });
    }

    return updated;
  });
};

export const getAllJobCards = () => repo.getAllJobCards();
export const getJobCardById = (id: number) => repo.getJobCardById(id);
export const deleteJobCard = (id: number) => repo.deleteJobCard(id);