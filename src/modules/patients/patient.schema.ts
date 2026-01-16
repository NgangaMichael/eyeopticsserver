import { z } from "zod";

// Create Patient Schema
export const createPatientSchema = z.object({
  body: z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.string().email().optional(),
    phone: z.string().min(6),
    dob: z.string().optional(), // date as ISO string
    gender: z.enum(["male", "female", "other"]).optional(),
    address: z.string().optional(),
  }),
});

// Update Patient Schema
export const updatePatientSchema = z.object({
  params: z.object({
    id: z.coerce.number().int().positive(),
  }),
  body: z.object({
    firstName: z.string().min(2).optional(),
    lastName: z.string().min(2).optional(),
    email: z.string().email().optional(),
    phone: z.string().min(6).optional(),
    dob: z.string().optional(),
    gender: z.enum(["male", "female", "other"]).optional(),
    address: z.string().optional(),
  }),
});
