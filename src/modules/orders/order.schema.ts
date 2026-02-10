import { z } from "zod";

export const createOrderSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Item name is required"), // Added
    code: z.string().min(1, "Code is required"),     // Added
    type: z.string().min(1, "Type is required"),     // Added

    sph: z.number().optional(),
    cyl: z.number().optional(),

    supplierName: z.string().min(2),
    quantityOrdered: z.number().positive(),
    landedCost: z.number().positive(),
    priceKsh: z.number().nonnegative().optional(),   // Added
    priceUsd: z.number().nonnegative().optional(),   // Added
    status: z.enum(["pending", "shipped", "partial", "received"]).optional(),
    expectedArrival: z.string().optional(),
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
