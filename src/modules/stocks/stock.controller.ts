import { Request, Response, NextFunction } from "express";
import * as service from "./stock.service";

type IdParams = { id: string };

export const createStock = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const stock = await service.createStock(req.body);
    res.status(201).json(stock);
  } catch (err) {
    next(err);
  }
};

export const getStocks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const stocks = await service.getAllStocks();
    res.json(stocks);
  } catch (err) {
    next(err);
  }
};

export const getStock = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const stock = await service.getStockById(Number(req.params.id));
    res.json(stock);
  } catch (err) {
    next(err);
  }
};

export const updateStock = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const stock = await service.updateStock(Number(req.params.id), req.body);
    res.json(stock);
  } catch (err) {
    next(err);
  }
};

export const deleteStock = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    await service.deleteStock(Number(req.params.id));
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
