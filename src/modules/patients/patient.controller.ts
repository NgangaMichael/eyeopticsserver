import { Request, Response, NextFunction } from "express";
import * as service from "./patient.service";

type IdParams = { id: string };

export const createPatient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const patient = await service.createPatient(req.body);
    res.status(201).json(patient);
  } catch (err) {
    next(err);
  }
};

export const getPatients = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const patients = await service.getAllPatients();
    res.json(patients);
  } catch (err) {
    next(err);
  }
};

export const getPatient = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const patient = await service.getPatientById(Number(req.params.id));
    res.json(patient);
  } catch (err) {
    next(err);
  }
};

export const updatePatient = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const patient = await service.updatePatient(Number(req.params.id), req.body);
    res.json(patient);
  } catch (err) {
    next(err);
  }
};

export const deletePatient = async (
  req: Request<IdParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    await service.deletePatient(Number(req.params.id));
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
