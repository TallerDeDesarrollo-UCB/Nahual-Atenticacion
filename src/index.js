const express = require("express");
const aplicacion = express();
const PORT = process.env.PORT || 5000
const bodyParser = require("body-parser");
const cors = require("cors");
const rutas = require(__dirname + '/Rutas/index');
//middleware
aplicacion.use(cors());
aplicacion.use(bodyParser.json());
aplicacion.use(bodyParser.urlencoded({ extended: false }));
aplicacion.use(express.json());
aplicacion.use(express.urlencoded());

//Rutas
aplicacion.use('/api', rutas);

aplicacion.get("*", function(peticion, respuesta) {
  respuesta.send("Bienvenido a nahual");
});

aplicacion.set('port', PORT);
aplicacion.listen(PORT, () => {
  console.log(`La API esta corriendo en ${PORT}`);
});
