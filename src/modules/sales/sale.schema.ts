import { z } from "zod";

export const createSaleSchema = z.object({
  body: z.object({
    patientId: z.number().int().positive(),
    items: z.array(
      z.object({
        stockId: z.number().int().positive(),
        quantity: z.number().int().positive(),
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
        quantity: z.number().int().positive(),
        price: z.number().positive(),
      })
    ).min(1),
  }),
});
