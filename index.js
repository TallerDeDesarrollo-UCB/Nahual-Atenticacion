var express = require('express');
var aplicacion = express();
const puerto = 3000

aplicacion.get('/', function(peticion, respuesta) {
  res.send('Bienvenido a nahual');
});

aplicacion.listen(puerto, () => {
  console.log(`Tu aplicacion esta corriendo en http://localhost:${port}`)
});
