import cors from "cors";
import express from "express";
import estudianteRouters from "./routes/estudianteRouters.js";
import asistenciaRouters from "./routes/asistenciaRouters.js";

const server = express();

// middlewares
server.use(cors(), express.json());

// Routes
server.use(estudianteRouters);
server.use(asistenciaRouters)

const PORT = process.env.PORT || 4000;

async function runServer() {
	await server.listen(PORT);
	console.log(`Running in port ${PORT}`);
}

export default runServer;