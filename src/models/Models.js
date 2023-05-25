// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const EstudianteSchema = new mongoose.Schema({
//     nombre: String,
//     apellido: String,
//     Lengua_espanola: Number,
//     Matematica: Number,
//     Ciencias_sociales: Number,
//     Ciencias_naturales: Number,
//     Literal: String
// });

// const AsistenciaSchema = new Schema({
//     id_estudiante: {
//         type: Schema.Types.ObjectId,
//         ref: 'Estudiante'
//     },
//     fecha: Date,
//     presente: Boolean
// });

// const Estudiante = mongoose.model('Estudiante', EstudianteSchema);
// const Asistencia = mongoose.model('Asistencia', AsistenciaSchema);

// module.exports = { Estudiante, Asistencia };

import mongoose from "mongoose";

const EstudianteSchema = new mongoose.Schema({
	nombre: String,
	apellido: String,
	Lengua_espanola: Number,
	Matematica: Number,
	Ciencias_sociales: Number,
	Ciencias_naturales: Number,
	Literal: String,
});

const AsistenciaSchema = new mongoose.Schema({
	id_estudiante: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Estudiante",
	},
	nombre: String,
	apellido: String,
	fecha: Date,
	presente: Boolean,
});

const Estudiante = mongoose.model("Estudiante", EstudianteSchema);
const Asistencia = mongoose.model("Asistencia", AsistenciaSchema);

export { Estudiante, Asistencia };
