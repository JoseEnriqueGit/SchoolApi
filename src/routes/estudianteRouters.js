import { Router } from "express";
import {
	runServer,
	getAllEstudiante,
	getEstudiante,
	newEstudiante,
	modicEstudiante,
	deleteEstudiante,
} from "../controllers/estudianteController.js";

const router = Router();

router.get("/", runServer);

router.get("/all-estudiante", getAllEstudiante);

router.get("/citation/:id", getEstudiante);

router.post("/new-estudiante", newEstudiante);

router.put("/modic-estudiante/:id", modicEstudiante);

router.delete("/delete-estudiante/:id", deleteEstudiante);

export default router;
