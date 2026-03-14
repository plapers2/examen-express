import express from "express";
import cors from "cors";
//* Importar rutas de autos
import autosRutas from "./src/routes/autos.route.js";
// Instancia global
const app = express();

//* Middlewares necesarios
app.use(cors());
app.use(express.json());

//* Uso de rutas
app.use("/api", autosRutas);

export default app;
