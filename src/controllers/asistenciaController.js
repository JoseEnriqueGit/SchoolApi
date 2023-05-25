import { Asistencia } from "../models/Models.js";

export const getAllAsistencia = async (req, res) => {
	try {
		const result = await Asistencia.find();
		if (!result.length) {
			return res.status(404).json({
				message: "No se han encontrado registros",
			});
		}
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({
			message: "Error al obtener los registros",
			error,
		});
	}
};

export const getAsistencia = async (req, res) => {
	try {
		const result = await Asistencia.findOne({ _id: req.params.id });
		if (!result) {
			return res.status(404).json({
				message: "El registro solicitado no ha sido encontrado",
				result,
			});
		}
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({
			message: "Error al obtener el registro",
			error,
		});
	}
};

// export const newAsistencia = async (req, res) => {
// 	try {
// 		const result = await Asistencia.create(req.body);
// 		res.status(201).json({
// 			message: "Registro creado exitosamente",
// 			result,
// 		});
// 	} catch (error) {
// 		res.status(500).json({
// 			message: "Error al crear el registro",
// 			error,
// 		});
// 	}
// };

export const newAsistencia = async (req, res) => {
	try {
		const { fecha } = req.body;
		const existingAsistencia = await Asistencia.findOne({ fecha: req.params.fecha });
		if (existingAsistencia) {
			res.status(400).json({
				message: "Esta fecha ya tiene una asistencia registrada",
			});
		} else {
			const result = await Asistencia.create(req.body);
			res.status(201).json({
				message: "Registro creado exitosamente",
				result,
			});
		}
	} catch (error) {
		res.status(500).json({
			message: "Error al crear el registro",
			error,
		});
	}
};

export const modicAsistencia = async (req, res) => {
	try {
		const result = await Asistencia.updateOne(
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

export const deleteAsistencia = async (req, res) => {
	try {
		const result = await Asistencia.deleteOne({ _id: req.params.id });
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
