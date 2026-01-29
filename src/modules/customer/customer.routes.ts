import { Router } from "express";
import * as controller from "./customer.controller";
import { requireAuth } from "../../middleware/auth.middleware";
import { validate } from "../../middleware/validate";
import {
  createCustomerSchema,
  updateCustomerSchema,
} from "./customer.schema";

const router = Router();

/* =========================
   ROUTES
   ========================= */
router.post(
  "/",
  requireAuth,
  validate(createCustomerSchema),
  controller.createCustomer
);

router.get("/", requireAuth, controller.getCustomers);

router.get("/:id", requireAuth, controller.getCustomers);

router.put(
  "/:id",
  requireAuth,
  validate(updateCustomerSchema),
  controller.updateCustomer
);

router.delete("/:id", requireAuth, controller.deleteCustomer);

export default router;