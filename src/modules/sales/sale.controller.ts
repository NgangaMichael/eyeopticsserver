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

export const deleteSale = async (req: Request<IdParams>, res: Response, next: NextFunction) => {
  try {
    await service.deleteSale(Number(req.params.id));
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
