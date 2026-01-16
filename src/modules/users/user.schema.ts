import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    username: z.string().min(2),
    designation: z.number().positive(),
    email: z.string().optional(),
    password: z.string().optional(),
  }),
});

export const updateUserSchema = z.object({
  params: z.object({
    id: z.coerce.number().int().positive()
  }),
  body: z.object({
    username: z.string().min(2).optional(),
    designation: z.number().positive().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
  }),
});
