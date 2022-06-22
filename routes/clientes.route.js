const express = require("express");

const ClientesService = require("../service/clientes.service");
const controlValidar = require("../middlewares/validar.middleware");
const {crearClienteSchema,actualizarClienteSchema,eliminarClienteSchema,findByClienteSchema} = require("../schemas/cliente.schemas")

const servicio = new ClientesService();
const router= express.Router();

router.get('/',async (req,res) => {
  const productos= await servicio.findAll();
  res.status(200).json(productos);
});

router.post('/',controlValidar(crearClienteSchema, 'params'), async(req,res) => {
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

router.put('/:id',controlValidar(actualizarClienteSchema,'body' ),async(req,res,) => {
  const { id }= req.params;
  try {
    const body = req.body;
    const cliente =await servicio.update(id,body);
    res.status(200).json(cliente);
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
    const cliente =await servicio.updateParcial(id,body);
    res.status(200).json(cliente);
  } catch (error) {
    res.status(404).json({
      mensaje: error.message
    });
  }

});


router.delete('/:id',controlValidar(eliminarClienteSchema,'params' ),(req,res) => {
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



router.get('/:id',controlValidar(findByClienteSchema, 'params'),async(req,res, next) => {
  try {
    const {id}= req.params;
    const cliente = await servicio.findBy(id);
    res.json(cliente);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
