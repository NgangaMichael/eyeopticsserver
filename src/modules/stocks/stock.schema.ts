import { z } from "zod";

// Create stock item schema
export const createStockSchema = z.object({
  body: z.object({
    itemType: z.enum(["frame", "lens"]), // must be "frame" or "lens"
    brand: z.string().min(2),
    model: z.string().optional(),
    material: z.string().min(2),
    color: z.string().optional(),
    size: z.string().optional(),
    type: z.string().min(2), // frame: rim type, lens: single/progressive/etc.
    coating: z.string().optional(), // lens only
    prescription: z
      .object({
        sphere: z.number(),
        cyl: z.number().optional(),
        axis: z.number().optional(),
      })
      .optional(),
    quantity: z.number().int().positive(),
    price: z.number().positive(),
  }),
});

// Update stock item schema
export const updateStockSchema = z.object({
  params: z.object({
    id: z.coerce.number().int().positive(),
  }),
  body: z.object({
    itemType: z.enum(["frame", "lens"]).optional(),
    brand: z.string().min(2).optional(),
    model: z.string().optional(),
    material: z.string().min(2).optional(),
    color: z.string().optional(),
    size: z.string().optional(),
    type: z.string().min(2).optional(),
    coating: z.string().optional(),
    prescription: z
      .object({
        sphere: z.number(),
        cyl: z.number().optional(),
        axis: z.number().optional(),
      })
      .optional(),
    quantity: z.number().int().positive().optional(),
    price: z.number().positive().optional(),
  }),
});
