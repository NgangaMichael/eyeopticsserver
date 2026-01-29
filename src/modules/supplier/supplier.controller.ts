import { Request, Response, NextFunction } from "express";
import * as service from "./supplier.service";

type IdParams = { id: string };

export const createSupplier = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const supplier = await service.createSupplier(req.body);
    res.status(201).json(supplier);
  } catch (err) {
    next(err);
  }
};

export const getSuppliers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const suppliers = await service.getAllSuppliers();
    res.json(suppliers);
  } catch (err) {
    next(err);
  }
};

export const getSupplier = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const supplier = await service.getSupplierById(Number(req.params.id));
    res.json(supplier);
  } catch (err) {
    next(err);
  }
};

export const updateSupplier = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const supplier = await service.updateSupplier(Number(req.params.id), req.body);
    res.json(supplier);
  } catch (err) {
    next(err);
  }
};

export const deleteSupplier = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    await service.deleteSupplier(Number(req.params.id));
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};