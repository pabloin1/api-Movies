const express = require("express");
const { obtenerSeries, serieReciente } = require("../controllers/seriesController");
const routesSeries = express.Router();

routesSeries.get("/", obtenerSeries);
routesSeries.get("/:anio",serieReciente)


module.exports ={routesSeries} ;