const express = require("express");
const { obtenerSeries, serieReciente, seriePopular } = require("../controllers/seriesController");
const routesSeries = express.Router();

routesSeries.get("/", obtenerSeries);
routesSeries.get("/Recientes",serieReciente)
routesSeries.get("/Popular",seriePopular)


module.exports ={routesSeries} ;