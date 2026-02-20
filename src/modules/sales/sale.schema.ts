import { z } from "zod";
// src/modules/sales/sale.schema.ts
export const createSaleSchema = z.object({
  body: z.object({
    customerId: z.coerce.number().int().positive().optional(),
    referenceNumber: z.string().min(1), // Add this line
    discount: z.number().nonnegative().optional(),
    items: z.array(
      z.object({
        stockId: z.number().int().positive(),
        quantity: z.number().positive(),
        price: z.number().positive(),
      })
    ).min(1),
  }),
});

export const updateSaleSchema = z.object({
  params: z.object({
    id: z.coerce.number().int().positive(),
  }),
  body: z.object({
    items: z.array(
      z.object({
        stockId: z.number().int().positive(),
        quantity: z.number().positive(),
        price: z.number().positive(),
      })
    ).min(1),
  }),
});
