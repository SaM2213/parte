const Joi = require("joi");

const id = Joi.string().uuid();
const nombreFunko = Joi.string().min(3).max(30);
const precio = Joi.number().min(5).max(200);

const crearProductoSchema = Joi.object({
  nombreFunko : nombreFunko,
  precio : precio
});

const actualizarProductoSchema = Joi.object({
  id : id.required(),
  nombreFunko,
  precio
});

const eliminarProductosSchema = Joi.object({
  id : id.required()
});


const findByProductoSchema = Joi.object({
  id : id.required()
});

module.exports = {crearProductoSchema,actualizarProductoSchema,eliminarProductosSchema,findByProductoSchema};
