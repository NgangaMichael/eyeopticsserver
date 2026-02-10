import { z } from "zod";

export const createStockSchema = z.object({
  body: z.object({
    name: z.string().min(2),
    code: z.string().min(2),
    type: z.enum(["FRAME", "LENS"]), // Enforce type

    qty: z.number().nonnegative(),

    // Lens specific fields
    sph: z.number().optional(),
    cyl: z.number().optional(),

    priceUsd: z.number().positive(),
    priceKsh: z.number().positive(),
    appPrice: z.number().positive().optional(),

    costUsd: z.number().positive().optional(),
    costKsh: z.number().positive().optional(),
    prevCostPb: z.number().positive().optional(),
    profitPerBale: z.number().optional(),

    bought: z.string().datetime().optional(),
    etr: z.string().datetime().optional(),

    fob: z.number().optional(),
    loading: z.number().optional(),

    supplier: z.string().optional(),
    notes: z.string().optional(),
  }),
});

export const updateStockSchema = z.object({
  params: z.object({
    id: z.coerce.number().int().positive(),
  }),
  body: createStockSchema.shape.body.partial(),
});