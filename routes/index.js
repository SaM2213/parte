const express = require('express');

const productosRouter = require('./productos.route')
const categoriasRouter = require('./categorias.route')
const clientesRouter = require('./clientes.route');
const tiendasRouter = require('./tiendas.route');

function rutas(app){
  app.get('/',(req,res) => {
    res.send("Hola desde aqui api noseque - express activo - peticion get");
  });
  const router = express.Router();
  app.use('/api/v1',router);
  router.use('/productos',productosRouter);
  router.use('/categorias',categoriasRouter);
  router.use('/tiendas',tiendasRouter);
  router.use('/clientes',clientesRouter);
}

module.exports = rutas;
