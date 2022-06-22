const Joi = require("joi");

const id = Joi.string().uuid();
const nombreTienda = Joi.string().min(3).max(30);
const ciudad = Joi.string().min(3).max(30);
const direccion = Joi.string().min(3).max(30);

const crearTiendaSchema = Joi.object({
  nombreTienda : nombreTienda,
  ciudad : ciudad,
  direccion : direccion
});

const actualizarTiendaSchema = Joi.object({
  id : id.required(),
  nombreTienda : nombreTienda.required(),
  ciudad : ciudad.required(),
  direccion : direccion.required()
});

const eliminarTiendaSchema = Joi.object({
  id : id.required()
});


const findByTiendaSchema = Joi.object({
  id : id.required()
});

module.exports = {crearTiendaSchema,actualizarTiendaSchema,eliminarTiendaSchema,findByTiendaSchema};
