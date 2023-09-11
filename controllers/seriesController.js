//? SeriesController.

//* req = Requerido de la respuesta.
//* res = Respues de la consulta.

const obtenerSeries = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * FROM Series", (err, rows) => {
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
    conn.query(`select * from Series where Año_Publicación >= 2000; `, (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    })
  })
}

const seriePopular = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    const año = req.params.anio;
    conn.query(`select * from Series where Can_Vistas > 1200000;`, (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    })
  })
}

//? Export de las arrowfunction.
//* Esto nos permite tener un codigo mas limpio en index.
module.exports = {
  obtenerSeries,
  serieReciente,
  seriePopular
};
