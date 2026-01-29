import { Request, Response, NextFunction } from "express";
import * as service from "./customer.service";

/* =========================
   GET ALL CUSTOMERS
   ========================= */
export const getCustomers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const customers = await service.getAllCustomers();
    res.json(customers);
  } catch (err) {
    next(err);
  }
};

/* =========================
   CREATE CUSTOMER
   ========================= */
export const createCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const customer = await service.createCustomer(req.body);
    res.status(201).json(customer);
  } catch (err) {
    next(err);
  }
};

/* =========================
   UPDATE CUSTOMER
   ========================= */
export const updateCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const customer = await service.updateCustomer(id, req.body);
    res.json(customer);
  } catch (err) {
    next(err);
  }
};

/* =========================
   DELETE CUSTOMER
   ========================= */
export const deleteCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    await service.deleteCustomer(id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};