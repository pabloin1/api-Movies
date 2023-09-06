const express = require("express");
const { obtenerPeliculas, peliculaReciente } = require("../controllers/peliculaController");
const routesPeliculas = express.Router();

routesPeliculas.get("/", obtenerPeliculas);
routesPeliculas.get("/:anio", peliculaReciente)

module.exports = { routesPeliculas };
