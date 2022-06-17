const express = require ('express');        //Requiero express
const app = express();                      //Lo ejecuto
const port = 3030;

//levanto mi server
app.listen (port, () => console.log(`Server corriendo en el puerto: ${port}`));





