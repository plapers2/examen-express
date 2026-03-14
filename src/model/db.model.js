import MySQL from "mysql2";
let cnx;
try {
  cnx = MySQL.createPool({
    host: "localhost",
    user: "root",
    database: "autos_examen",
    port: "3306",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
} catch (error) {
  console.log(`Ah ocurrido un error en la conexion: ${error.message}`);
}
export default cnx;
