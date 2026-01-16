import { Request, Response, NextFunction } from "express";
import * as service from "./order.service";

type IdParams = { id: string };

export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await service.createOrder(req.body);
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
};

export const getOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await service.getAllOrders();
    res.json(orders);
  } catch (err) {
    next(err);
  }
};

export const getOrder = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await service.getOrderById(Number(req.params.id));
    res.json(order);
  } catch (err) {
    next(err);
  }
};

export const updateOrder = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await service.updateOrder(Number(req.params.id), req.body);
    res.json(order);
  } catch (err) {
    next(err);
  }
};

export const deleteOrder = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    await service.deleteOrder(Number(req.params.id));
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
