import { z } from "zod";
// src/modules/sales/sale.schema.ts
export const createSaleSchema = z.object({
  body: z.object({
    customerId: z.coerce.number().int().positive().optional(),
    referenceNumber: z.string().min(1),
    discount: z.number().nonnegative().optional(),
    etimsReceipt: z.string().optional(), // Added
    etimsAmount: z.number().nonnegative().optional(), // Added
    items: z.array(
      z.object({
        stockId: z.number().int().positive(),
        quantity: z.number().positive(),
        price: z.number().positive(),
      })
    ).min(1),
  }),
});

export const updateEtimsSchema = z.object({
  params: z.object({
    id: z.coerce.number().int().positive(),
  }),
  body: z.object({
    etimsReceipt: z.string().optional(),
    etimsAmount: z.number().nonnegative().optional(),
  }),
});