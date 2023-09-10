const express = require("express");
const { obtenerSeries, serieReciente } = require("../controllers/seriesController");
const routesSeries = express.Router();

routesSeries.get("/", obtenerSeries);
routesSeries.get("/Recientes",serieReciente)


module.exports ={routesSeries} ;