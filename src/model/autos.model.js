//! Modelo para autos

//* Importacion de Base de datos
import cnx from "./db.model.js";
//* Activar async en consultas
const db = cnx.promise();

//* Modelo de autos
export const autosModel = {
  //? Listar todos los autos
  findAll: async function () {
    const sql = "SELECT * FROM autos ORDER BY placa_vehiculo ASC;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql);
    return [rows];
  },
  //? Listar auto por ID
  findById: async function (id) {
    const sql = "SELECT * FROM autos WHERE placa_vehiculo = ? ORDER BY placa_vehiculo ASC;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, id);
    return [rows];
  },
  //? Crear auto
  insert: async function (datos) {
    const sql = "INSERT INTO autos SET ?;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, [datos]);
    return [rows];
  },
  //? Modificar auto
  update: async function (id, datos) {
    const sql = "UPDATE autos SET ? WHERE placa_vehiculo = ?";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, [datos, id]);
    return [rows];
  },
  //? Activar auto
  activate: async function (id) {
    const sql = "UPDATE autos SET estado = 'Activo' WHERE placa_vehiculo = ?;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, id);
    return [rows];
  },
  //? Desactivar auto
  inactivate: async function (id) {
    const sql = "UPDATE autos SET estado = 'Inactivo' WHERE placa_vehiculo = ?;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, id);
    return [rows];
  },
};
