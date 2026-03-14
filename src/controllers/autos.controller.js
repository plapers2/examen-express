//* Se importa el modelo de autos
import { autosModel } from "../model/autos.model.js";

//* Traer todos los autos
export const getAutos = async (req, res) => {
  try {
    const results = await autosModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al listar los autos" + error,
    });
  }
};
//* Traer auto por ID
export const getAutosById = async (req, res) => {
  try {
    const results = await autosModel.findById(req.params.placa_vehiculo);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al listar el auto",
    });
  }
};
//* Crear un auto
export const postAutos = async (req, res) => {
  try {
    const results = await autosModel.insert(req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al registrar el auto",
    });
  }
};
//* Modificar un auto
export const putAutos = async (req, res) => {
  try {
    const results = await autosModel.update(req.params.placa_vehiculo, req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al editar el auto",
    });
  }
};
//* Cambiar estado a Activo
export const activateAutos = async (req, res) => {
  try {
    const results = await autosModel.activate(req.params.placa_vehiculo);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al activar el auto",
    });
  }
};
//* Cambiar estado a Inactivo
export const inactivateAutos = async (req, res) => {
  try {
    const results = await autosModel.inactivate(req.params.placa_vehiculo);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al inactivar el auto",
    });
  }
};
