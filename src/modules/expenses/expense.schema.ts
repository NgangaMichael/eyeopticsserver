import { z } from "zod";

export const createExpenseSchema = z.object({
  body: z.object({
    title: z.string().min(2),
    amount: z.number().positive(),
    category: z.string().optional(),
    note: z.string().optional(),
  }),
});

export const updateExpenseSchema = z.object({
  params: z.object({
    id: z.coerce.number().int().positive()
  }),
  body: z.object({
    title: z.string().min(2).optional(),
    amount: z.number().positive().optional(),
    category: z.string().optional(),
    note: z.string().optional(),
  }),
});
