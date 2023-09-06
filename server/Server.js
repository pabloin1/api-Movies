const express = require("express");
const cors = require("cors");
const myconn = require("express-myconnection");
const createConnection = require("../dataBase/dbConfig");

//* Son las rutas que se usaran para acceder a los datos de la DB
const { routesPeliculas } = require("../routes/routesPelicula");
const { routesSeries } = require("../routes/routesSeries");

//? Constructor de Server. 
//! Es como un constructor de Java.

//* En este constructor implementamos los metodos que nos seran útil para la conf. de API.


class Server {
  
  constructor() {
    //? Atributos del constructor.

    this.server = express();
    this.Middlewares();
    this.Routes();
  }

  //? Metodos del Objeto server.

  Middlewares() {
    this.server.use(myconn(createConnection, "single"));
    this.server.use(express.json());
    this.server.use(cors());
  }

  Routes() {
    //* Aquí es donde las rutas se definen para acceder a los datos de DB
    this.server.get("/", (req, res) => res.send("Bienvenido a la api"));

    this.server.use("/Peliculas", routesPeliculas);
    this.server.use("/Series", routesSeries)
  }

  //? Iniciador del server.

  startServer(port) {
    this.server.set("port", port || 9000);
    this.server.listen(this.server.get("port"), () => {
      console.log("server corriendo en el puerto", this.server.get("port"));
    });
  }
}

module.exports = Server;
