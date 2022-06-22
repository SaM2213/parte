const express = require("express");

const ProductosService = require("../service/productos.service");
const controlValidar = require("../middlewares/validar.middleware");
const {crearProductoSchema,actualizarProductoSchema,findByProductoSchema, eliminarProductosSchema} = require("../schemas/producto.schemas")

const servicio = new ProductosService();
const router= express.Router();

router.get('/',async (req,res) => {
  const productos= await servicio.findAll();
  res.status(200).json(productos);
});

router.post('/',controlValidar(crearProductoSchema, 'params'), async(req,res,next) => {
  try {
    const body = req.body;
  const producto = await servicio.create(body);
  res.status(200).json(producto);
  } catch (error) {
    next(error);
  }
});

router.put('/:id',controlValidar(actualizarProductoSchema,'body' ),async(req,res,) => {
  const { id }= req.params;
  try {
    const body = req.body;
    const producto =await servicio.update(id,body);
    res.status(200).json(producto);
  } catch (error) {
    res.status(404).json({
      mensaje: error.message
    });
  }

});

router.patch('/:id',controlValidar(actualizarProductoSchema,'params' ),async(req,res, next) => {
  try {
    const { id }= req.params;
    const body = req.body;
    const producto =await servicio.updateParcial(id,body);
    res.status(200).json(producto);
  } catch (error) {
    res.status(404).json({
      mensaje: error.message
    });
  }

});

router.delete('/:id',controlValidar(eliminarProductosSchema,'params' ),async(req,res,next) => {
  try {
  const { id }= req.params;
  const salida = servicio.delete(id);
  res.json(salida);
} catch (error) {
  next(error);
}
});



router.get('/:id',controlValidar(findByProductoSchema, 'params'),async(req,res, next) => {
  try {
    const {id}= req.params;
    const producto = await servicio.findBy(id);
    res.json(producto);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
