import { Router } from "express";
import * as controller from "./user.controller";
import { requireAuth } from "../../middleware/auth.middleware";
import { validate } from "../../middleware/validate";
import {
  createUserSchema,
  updateUserSchema,
} from "./user.schema";

const router = Router();

/* =========================
   ROUTES
   ========================= */
router.post(
  "/",
  requireAuth,
  validate(createUserSchema),
  controller.createUser
);

router.get("/", requireAuth, controller.getUsers);

router.get("/:id", requireAuth, controller.getUser);

router.put(
  "/:id",
  requireAuth,
  validate(updateUserSchema),
  controller.updateUser
);

router.delete("/:id", requireAuth, controller.deleteUser);

export default router;
