var express = require('express');
//crear nuestra app

var app = express();
app.use(express.static('public'));//el fichero donde escucha los archivos estaticos
//funcion para levantar el listener del servidor
app.listen(3000, function (){
  console.log('Express server is up on port 3000');
});
