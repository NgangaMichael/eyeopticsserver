"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulkAddItemsSchema = exports.addItemSchema = exports.updateContainerSchema = exports.createContainerSchema = void 0;
const zod_1 = require("zod");
exports.createContainerSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Container name is required"),
        createdBy: zod_1.z.string().min(1, "Creator name is required"),
        supplierName: zod_1.z.string().min(1, "Supplier name is required"),
    }),
});
exports.updateContainerSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.coerce.number().int().positive(),
    }),
    body: zod_1.z.object({
        name: zod_1.z.string().min(1).optional(),
        supplierName: zod_1.z.string().min(1).optional(),
    }),
});
exports.addItemSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.coerce.number().int().positive(),
    }),
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Item name is required"),
        code: zod_1.z.string().min(1, "Code is required"),
        type: zod_1.z.string().min(1, "Type is required"),
        index: zod_1.z.string().optional(),
        lensCategory: zod_1.z.enum(["Stock", "Custom"]).optional(),
        sph: zod_1.z.number().optional(),
        cyl: zod_1.z.number().optional(),
        axis: zod_1.z.number().int().min(0).max(180).optional(),
        nearAdd: zod_1.z.number().optional(),
        quantityOrdered: zod_1.z.number().positive(),
        landedCost: zod_1.z.number().nonnegative(),
        priceKsh: zod_1.z.number().nonnegative().optional(),
        priceUsd: zod_1.z.number().nonnegative().optional(),
    }),
});
exports.bulkAddItemsSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.coerce.number().int().positive(),
    }),
    body: zod_1.z.object({
        items: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string().min(1),
            code: zod_1.z.string().min(1),
            type: zod_1.z.string().min(1),
            index: zod_1.z.string().optional(),
            lensCategory: zod_1.z.string().optional(),
            sph: zod_1.z.number().optional(),
            cyl: zod_1.z.number().optional(),
            axis: zod_1.z.number().optional(),
            nearAdd: zod_1.z.number().optional(),
            quantityOrdered: zod_1.z.number().positive(),
            landedCost: zod_1.z.number().nonnegative(),
            priceKsh: zod_1.z.number().nonnegative().optional(),
            priceUsd: zod_1.z.number().nonnegative().optional(),
        })).min(1, "At least one item is required"),
    }),
});
//# sourceMappingURL=container.schema.js.map