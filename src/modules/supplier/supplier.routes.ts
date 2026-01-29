import { Router } from "express";
import * as controller from "./supplier.controller";
import { requireAuth } from "../../middleware/auth.middleware";
import { validate } from "../../middleware/validate";
import { createSupplierSchema } from "./supplier.schema";

const router = Router();

router.post("/", requireAuth, validate(createSupplierSchema), controller.createSupplier);
router.get("/", requireAuth, controller.getSuppliers);
router.get("/:id", requireAuth, controller.getSupplier);
router.put("/:id", requireAuth, controller.updateSupplier);
router.delete("/:id", requireAuth, controller.deleteSupplier);

export default router;