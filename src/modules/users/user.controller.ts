import { Request, Response, NextFunction } from "express";
import * as service from "./user.service";

type IdParams = { id: string };

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await service.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await service.getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

export const getUser = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await service.getUserById(Number(req.params.id));
    res.json(user);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await service.updateUser(Number(req.params.id), req.body);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    await service.deleteUser(Number(req.params.id));
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
