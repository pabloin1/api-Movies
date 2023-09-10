//? MovieController

//* Los controles nos permiten tener las consultas de manera ordenada.


//* req = Requerido de la respuesta.
//* res = Respues de la consulta.

//? Obtención de la tablas peliculas.
//! Extrae todos los datos.
const obtenerPeliculas = (req, res) => {

  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * FROM Peliculas", (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    })
  })
}


//?Consulta para obtener las peliculas más recientes, basado en el año de publicación.
const peliculaReciente = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    const año = req.params.anio;
    conn.query(`select * from Peliculas where Año_Publicación >= 2010; `, (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    })
  })
}


const peliculaPopular = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    const año = req.params.anio;
    conn.query(`select * from Peliculas where Can_Vistas >= 100; `, (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    })
  })
}





//? Export de las arrowfunction.
//* Esto nos permite tener un codigo mas limpio en index.
module.exports = {
  obtenerPeliculas,
  peliculaReciente,
  peliculaPopular
};



