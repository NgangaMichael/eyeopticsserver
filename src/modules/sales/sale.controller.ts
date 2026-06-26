import { Request, Response, NextFunction } from "express";
import * as service from "./sale.service";

type IdParams = { id: string };

export const createSale = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sale = await service.createSale(req.body);
    res.status(201).json(sale);
  } catch (err) {
    next(err);
  }
};

export const getSales = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sales = await service.getAllSales();
    res.json(sales);
  } catch (err) {
    next(err);
  }
};

export const getSale = async (req: Request<IdParams>, res: Response, next: NextFunction) => {
  try {
    const sale = await service.getSaleById(Number(req.params.id));
    res.json(sale);
  } catch (err) {
    next(err);
  }
};

export const updateSale = async (req: Request<IdParams>, res: Response, next: NextFunction) => {
  try {
    const updated = await service.updateSale(Number(req.params.id), req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// Replace your bulkUpdateSales function inside sale.controller.ts with this:
export const bulkUpdateSales = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updates = req.body;
    
    // 1. Log the payload to make sure Express is reading the array correctly
    console.log("► [Bulk Update] Incoming Request Body:", updates);

    if (!Array.isArray(updates)) {
      console.warn("✖ [Bulk Update] Failed: req.body is not an array!");
      return res.status(400).json({ message: "Payload must be an array of updates." });
    }

    await service.bulkUpdateSales(updates);
    res.json({ success: true, message: "Bulk update executed successfully" });
  } catch (err) {
    // 2. FORCE PRINT THE CRASH REASON TO TERMINAL
    console.error("❌ [Bulk Update Critical Error]:", err);
    next(err);
  }
};

export const deleteSale = async (req: Request<IdParams>, res: Response, next: NextFunction) => {
  try {
    await service.deleteSale(Number(req.params.id));
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
