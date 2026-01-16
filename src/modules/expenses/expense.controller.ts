import { Request, Response, NextFunction } from "express";
import * as service from "./expense.service";

type IdParams = { id: string };

export const createExpense = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const expense = await service.createExpense(req.body);
    res.status(201).json(expense);
  } catch (err) {
    next(err);
  }
};

export const getExpenses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const expenses = await service.getAllExpenses();
    res.json(expenses);
  } catch (err) {
    next(err);
  }
};

export const getExpense = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const expense = await service.getExpenseById(req.params.id);
    res.json(expense);
  } catch (err) {
    next(err);
  }
};

export const updateExpense = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const expense = await service.updateExpense(req.params.id, req.body);
    res.json(expense);
  } catch (err) {
    next(err);
  }
};

export const deleteExpense = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    await service.deleteExpense(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
