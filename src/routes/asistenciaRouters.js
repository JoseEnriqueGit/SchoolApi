import { Router } from "express";
import {
	getAllAsistencia,
	getAsistencia,
	newAsistencia,
	modicAsistencia,
	deleteAsistencia,
} from "../controllers/asistenciaController.js";

const router = Router();

router.get("/all-asistencia", getAllAsistencia);

router.get("/asistencia/:id", getAsistencia);

router.post("/new-asistencia", newAsistencia);

router.put("/modic-asistencia/:id", modicAsistencia);

router.delete("/delete-asistencia/:id", deleteAsistencia);

export default router;