//? dbConfig.js

const mysql = require("mysql");

//? Creacion de un objeto para la confi.

const dbOptions = {
  //* Aquí creamos la conexión a la DB.
  host: "blbmavcpiwgimljsh179-mysql.services.clever-cloud.com",
  port: 3306,
  user: "uxonlipaabpy3vwl",
  password: "x6rXL4O1BvayshsRyjeU",
  database: "blbmavcpiwgimljsh179",
};

//? Conectamos a la DB.

const createConnection = () => {
  //* Mandamos el objeto dbOptions para crear la conexión.
  return mysql.createConnection(dbOptions);
};

module.exports = {
  createConnection,
};
