import { Estudiante } from "../models/Models.js";

export const runServer = (req, res) => {
	return res.json({
		status: "success",
		routes: {
			message: "Bienvenido a la API de la escuela",
		},
	});
};

export const getAllEstudiante = async (req, res) => {
	try {
		const result = await Estudiante.find();
		if (!result.length) {
			return res.status(404).json({
				message: "No se han encontrado registros",
			});
		}
		res.status(200).json({
			message: "Registros obtenidos exitosamente",
			result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Error al obtener los registros",
			error,
		});
	}
};

export const getEstudiante = async (req, res) => {
	try {
		const result = await Estudiante.findOne({ _id: req.params.id });
		if (!result) {
			return res.status(404).json({
				message: "El registro solicitado no ha sido encontrado",
				result,
			});
		}
		res.status(200).json({
			message: "Registro obtenido exitosamente",
			result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Error al obtener el registro",
			error,
		});
	}
};

export const newEstudiante = async (req, res) => {
	try {
		const result = await Estudiante.create(req.body);
		res.status(201).json({
			message: "Registro creado exitosamente",
			result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Error al crear el registro",
			error,
		});
	}
};

export const modicEstudiante = async (req, res) => {
	try {
		const result = await Estudiante.updateOne(
			{ _id: req.params.id },
			req.body,
			{ upsert: true }
		);
		res.status(200).json({
			message: "Registro actualizado exitosamente",
			result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Error al actualizar el registro",
			error,
		});
	}
};

export const deleteEstudiante = async (req, res) => {
	try {
		const result = await Estudiante.deleteOne({ _id: req.params.id });
		res.status(200).json({
			message: "Registro eliminado exitosamente",
			result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Error al eliminar el registro",
			error,
		});
	}
};
