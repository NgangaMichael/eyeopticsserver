import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Fetch the secret key dynamically inside the middleware execution block
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return res.status(500).json({ message: "Internal Server Configuration Error" });
  }

  try {
    const token = header.split(" ")[1];
    const decoded = jwt.verify(token, secret); // Pass the dynamically fetched secret
    (req as any).user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};