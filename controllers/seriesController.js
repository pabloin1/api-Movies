//? SeriesController.

//* req = Requerido de la respuesta.
//* res = Respues de la consulta.

const obtenerSeries = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * FROM Peliculas", (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    })
  })
}

//?Consulta para obtener las series más recientes, basado en el año de publicación.

const serieReciente = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    const año = req.params.anio;
    conn.query(`select * from Series where Año_Publicación >= ${año}; `, (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    })
  })
}

//? Export de las arrowfunction.
//* Esto nos permite tener un codigo mas limpio en index.
module.exports = {
  obtenerSeries,
  serieReciente
};
