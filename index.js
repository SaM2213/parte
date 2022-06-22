const express = require("express");
const cors = require("cors");
const rutas = require("./routes");

const {manejarError,mostrarError,boomManejarError} = require("./middlewares/error.middleware");

const aplicacion = express();

const port = 3500;

aplicacion.use(express.json());
aplicacion.use(cors());

rutas(aplicacion);

aplicacion.use(mostrarError);
aplicacion.use(boomManejarError);
aplicacion.use(manejarError);


aplicacion.listen(port, () => {
  console.log('puerto activo: ' + port);
});





