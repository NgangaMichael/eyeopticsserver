import { Router } from "express";
import * as controller from "./patient.controller";

const router = Router();

router.post("/", controller.createPatient);
router.get("/", controller.getPatients);
router.get("/:id", controller.getPatient);
router.put("/:id", controller.updatePatient);
router.delete("/:id", controller.deletePatient);

export default router;
