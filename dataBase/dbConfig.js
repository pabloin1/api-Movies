//? dbConfig.js

const mysql = require("mysql");

//? Creacion de un objeto para la confi.

const dbOptions = {
  //* Aquí creamos la conexión a la DB.
  host: "localhost",
  port: 3306,
  user: "root",
  password: "pablo123",
  database: "BDD_MoviesIDS",
};

//? Conectamos a la DB.

const createConnection = () => {
  //* Mandamos el objeto dbOptions para crear la conexión.
  return mysql.createConnection(dbOptions);
};

module.exports = {
  createConnection,
};
