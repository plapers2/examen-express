import { Router } from "express";
import * as autosController from "../controllers/autos.controller.js";

const router = Router();

//* Creacion de rutas para api
//? listar todos
router.get("/autos/listarTodos", autosController.getAutos);
//? listar por id
router.get("/autos/listarPorPlaca/:placa_vehiculo", autosController.getAutosById);
//? Crear
router.post("/autos/crearAuto", autosController.postAutos);
//? Actualizar
router.put("/autos/actualizarAuto/:placa_vehiculo", autosController.putAutos);
//? Eliminar (logico)
router.put("/autos/activarAuto/:placa_vehiculo", autosController.activateAutos);
//? Restaurar eliminado (logico)
router.put("/autos/inactivarAuto/:placa_vehiculo", autosController.inactivateAutos);

export default router;
