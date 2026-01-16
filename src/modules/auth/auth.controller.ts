import { Request, Response, NextFunction } from "express";
import * as service from "./auth.service";

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const result = await service.login(email, password);
    res.json(result);
  } catch (err) {
    next(err);
  }
};
