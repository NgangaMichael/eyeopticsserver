import { z } from "zod";

export const createSupplierSchema = z.object({
  body: z.object({
    name: z.string().min(2),
    email: z.string().email().optional().nullable(),
    phone: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
  }),
});