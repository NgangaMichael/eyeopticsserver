import { z } from "zod";

export const createContainerSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Container name is required"),
    createdBy: z.string().min(1, "Creator name is required"),
    supplierName: z.string().min(1, "Supplier name is required"),
  }),
});

export const updateContainerSchema = z.object({
  params: z.object({
    id: z.coerce.number().int().positive(),
  }),
  body: z.object({
    name: z.string().min(1).optional(),
    supplierName: z.string().min(1).optional(),
  }),
});

export const addItemSchema = z.object({
  params: z.object({
    id: z.coerce.number().int().positive(),
  }),
  body: z.object({
    name: z.string().min(1, "Item name is required"),
    code: z.string().min(1, "Code is required"),
    type: z.string().min(1, "Type is required"),
    index: z.string().optional(),
    lensCategory: z.enum(["Stock", "Custom"]).optional(),
    sph: z.number().optional(),
    cyl: z.number().optional(),
    axis: z.number().int().min(0).max(180).optional(),
    nearAdd: z.number().optional(),
    quantityOrdered: z.number().positive(),
    landedCost: z.number().nonnegative(),
    priceKsh: z.number().nonnegative().optional(),
    costKsh: z.number().nonnegative().optional(),
    priceUsd: z.number().nonnegative().optional(),
  }),
});

export const bulkAddItemsSchema = z.object({
  params: z.object({
    id: z.coerce.number().int().positive(),
  }),
  body: z.object({
    items: z.array(
      z.object({
        name: z.string().min(1),
        code: z.string().min(1),
        type: z.string().min(1),
        index: z.string().optional(),
        lensCategory: z.string().optional(),
        sph: z.number().optional(),
        cyl: z.number().optional(),
        axis: z.number().optional(),
        nearAdd: z.number().optional(),
        quantityOrdered: z.number().positive(),
        landedCost: z.number().nonnegative(),
        priceKsh: z.number().nonnegative().optional(),
        costKsh: z.number().nonnegative().optional(),
        priceUsd: z.number().nonnegative().optional(),
      })
    ).min(1, "At least one item is required"),
  }),
});