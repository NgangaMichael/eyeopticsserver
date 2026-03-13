import { Request, Response, NextFunction } from "express";
import * as service from "./container.service";

type IdParams = { id: string };
type ItemParams = { id: string; itemId: string };

export const createContainer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const container = await service.createContainer(req.body);
    res.status(201).json(container);
  } catch (err) {
    next(err);
  }
};

export const getContainers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const containers = await service.getAllContainers();
    res.json(containers);
  } catch (err) {
    next(err);
  }
};

export const getContainer = async (req: Request<IdParams>, res: Response, next: NextFunction) => {
  try {
    const container = await service.getContainerById(Number(req.params.id));
    res.json(container);
  } catch (err) {
    next(err);
  }
};

export const updateContainer = async (req: Request<IdParams>, res: Response, next: NextFunction) => {
  try {
    const container = await service.updateContainer(Number(req.params.id), req.body);
    res.json(container);
  } catch (err) {
    next(err);
  }
};

export const deleteContainer = async (req: Request<IdParams>, res: Response, next: NextFunction) => {
  try {
    await service.deleteContainer(Number(req.params.id));
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

export const addItem = async (req: Request<IdParams>, res: Response, next: NextFunction) => {
  try {
    const item = await service.addItemToContainer(Number(req.params.id), req.body);
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};

export const bulkAddItems = async (req: Request<IdParams>, res: Response, next: NextFunction) => {
  try {
    const result = await service.bulkAddItems(Number(req.params.id), req.body.items);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

export const deleteItem = async (req: Request<ItemParams>, res: Response, next: NextFunction) => {
  try {
    await service.deleteContainerItem(Number(req.params.id), Number(req.params.itemId));
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

export const receiveContainer = async (req: Request<IdParams>, res: Response, next: NextFunction) => {
  try {
    const container = await service.receiveContainer(Number(req.params.id));
    res.json(container);
  } catch (err) {
    next(err);
  }
};