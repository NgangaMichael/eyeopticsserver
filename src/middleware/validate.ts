import { ZodTypeAny, ZodError } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      next();
    } catch (err: any) {
      if (err instanceof ZodError) {
        console.error("❌ Validation failed:");
        console.error("Request body:", req.body);
        console.error("Zod errors:", JSON.stringify(err.issues, null, 2));
        
        return res.status(400).json({
          message: "Validation error",
          errors: err.issues, // ← Changed from err.errors to err.issues
        });
      }
      
      // For non-Zod errors
      console.error("❌ Unexpected error:", err);
      return res.status(400).json({
        message: "Validation error",
        errors: [{ message: err.message }],
      });
    }
  };