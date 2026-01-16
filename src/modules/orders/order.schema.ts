import { z } from "zod";

export const createOrderSchema = z.object({
  body: z.object({
    supplierName: z.string().min(2),
    supplierEmail: z.string().email().optional(),
    supplierPhone: z.string().optional(),
    lensType: z.string().min(2),
    material: z.string().min(2),
    coating: z.string().optional(),
    quantityOrdered: z.number().int().positive(),
    landedCost: z.number().positive(),
    expectedArrival: z.string().optional(), // ISO date
    status: z.enum(["pending", "shipped", "partial", "received"]),
  }),
});

export const updateOrderSchema = z.object({
  params: z.object({
    id: z.coerce.number().int().positive(),
  }),
  body: z.object({
    supplierName: z.string().min(2).optional(),
    supplierEmail: z.string().email().optional(),
    supplierPhone: z.string().optional(),
    lensType: z.string().min(2).optional(),
    material: z.string().min(2).optional(),
    coating: z.string().optional(),
    quantityOrdered: z.number().int().positive().optional(),
    quantityReceived: z.number().int().nonnegative().optional(),
    landedCost: z.number().positive().optional(),
    expectedArrival: z.string().optional(),
    receivedDate: z.string().optional(),
    status: z.enum(["pending", "shipped", "partial", "received"]).optional(),
  }),
});
