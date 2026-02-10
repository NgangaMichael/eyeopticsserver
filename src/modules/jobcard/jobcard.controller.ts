import { Request, Response, NextFunction } from "express";
import * as service from "./jobcard.service";

export const createJobCard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const card = await service.createJobCard(req.body);
    res.status(201).json(card);
  } catch (err) {
    next(err);
  }
};

export const getJobCards = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cards = await service.getAllJobCards();
    res.json(cards);
  } catch (err) {
    next(err);
  }
};

export const getJobCard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const card = await service.getJobCardById(Number(req.params.id));
    res.json(card);
  } catch (err) {
    next(err);
  }
};

export const updateJobCard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const card = await service.updateJobCard(Number(req.params.id), req.body);
    res.json(card);
  } catch (err) {
    next(err);
  }
};

export const deleteJobCard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await service.deleteJobCard(Number(req.params.id));
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};