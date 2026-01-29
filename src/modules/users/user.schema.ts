import { z } from "zod";

/* =========================
   CREATE USER
   ========================= */
export const createUserSchema = z.object({
  body: z.object({
    username: z.string().min(2),
    designation: z.string().min(1).optional(),
    email: z.string().email(),
    phone: z.string().min(9),
    password: z.string().min(6),
  }),
});

/* =========================
   UPDATE USER
   ========================= */
export const updateUserSchema = z.object({
  params: z.object({
    id: z.coerce.number().int().positive(),
  }),
  body: z.object({
    username: z.string().min(2).optional(),
    designation: z.string().min(1).optional(),
    email: z.string().email().optional(),
    phone: z.string().min(9).optional(),
    password: z.string().min(6).optional(),
  }),
});
