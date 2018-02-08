//requires
var express = require('express');
var mongoose = require('mongoose');

//inicializar variables
var app = express();

//Conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/', ( err, res ) => {

  if( err) throw err;

  console.log('Base de datos: \x1b[32m%s\x1b[0m','online');
});




/* Rutas
    Ejecuto una peticion GET
    Parametros:
      - path '/'
      - funcion callback (request, response, next)
        - next (cuando se ejecute, continuar con la siguiente instrucción)
*/
app.get('/', (req, res, next) => {

  //status permite devolver el estado de la respuesta de la petición con un codigo
  res.status(200).json({
    ok:'true',
    mensaje: 'Peticion realizada correctamente'
  })
});


//Escuchar peticiones
app.listen(8081, () => {

  /* Para mostrar colores en la consola:
    sintaxis color: inicio verde: \x1b[32m
                    fin para cualquier color: \x1b[0m
  */
  console.log('Express Server puerto 8081: \x1b[32m%s\x1b[0m','online');
});
