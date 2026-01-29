import { z } from "zod";

export const createCustomerSchema = z.object({
  body: z.object({
    name: z.string().min(2),
    type: z.enum(["patient", "company", "outlet"]),
    email: z.string().email().optional().nullable(),
    phone: z.string().min(9).optional().nullable(),
    address: z.string().optional().nullable(),
  }),
});

export const updateCustomerSchema = z.object({
  params: z.object({
    id: z.coerce.number().int().positive(),
  }),
  body: z.object({
    name: z.string().min(2).optional(),
    type: z.enum(["patient", "company", "outlet"]).optional(),
    email: z.string().email().optional().nullable(),
    phone: z.string().min(9).optional().nullable(),
    address: z.string().optional().nullable(),
  }),
});