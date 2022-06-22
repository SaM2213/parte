const express = require("express");

const TiendasService = require("../service/tiendas.service");
const controlValidar = require("../middlewares/validar.middleware");
const {crearTiendaSchema,actualizarTiendaSchema,findByTiendaSchema, eliminarTiendaSchema} = require("../schemas/tienda.schemas")

const servicio = new TiendasService();
const router= express.Router();

router.get('/',async (req,res) => {
  const tiendas= await servicio.findAll();
  res.status(200).json(tiendas);
});

router.post('/',controlValidar(crearTiendaSchema, 'body'), async(req,res) => {
  try {
    const body = await req.body;
  servicio.create(body);
  res.status(200).json({
    mensaje:"Registro exitoso",
    datos : body
  });
  } catch (error) {
    res.status(404).json({
      mensaje: error.message
    });
  }

});

router.put('/:id',controlValidar(actualizarTiendaSchema,'body' ),async(req,res,) => {
  const { id }= req.params;
  try {
    const body = req.body;
    const tienda =await servicio.update(id,body);
    res.status(200).json(tienda);
  } catch (error) {
    res.status(404).json({
      mensaje: error.message
    });
  }

});

router.patch('/:id',async(req,res, next) => {
  try {
    const { id }= req.params;
    const body = req.body;
    const tienda =await servicio.updateParcial(id,body);
    res.status(200).json(tienda);
  } catch (error) {
    res.status(404).json({
      mensaje: error.message
    });
  }

});

router.delete('/:id',controlValidar(eliminarTiendaSchema,'params' ),(req,res) => {
  try {
    const { id }= req.params;
  const salida = servicio.delete(id);
  res.json(salida);
  } catch (error) {
    res.status(404).json({
      mensaje: error.message
    });
  }

});



router.get('/:id',controlValidar(findByTiendaSchema, 'params'),async(req,res, next) => {
  try {
    const {id}= req.params;
    const tienda = await servicio.findBy(id);
    res.json(tienda);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
