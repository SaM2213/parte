const Joi = require("joi");

const id = Joi.string().uuid();
const nombre = Joi.string().min(3).max(30);
const apellido = Joi.string().min(3).max(30);
const numero = Joi.number().integer();

const crearClienteSchema = Joi.object({
  nombre : nombre,
  apellido : apellido,
  numero : numero
});

const actualizarClienteSchema = Joi.object({
  id : id.required(),
  nombre : nombre.required(),
  apellido : apellido.required(),
  numero : numero.required()
});

const eliminarClienteSchema = Joi.object({
  id : id.required()
});


const findByClienteSchema = Joi.object({
  id : id.required()
});

module.exports = {crearClienteSchema,actualizarClienteSchema,eliminarClienteSchema,findByClienteSchema};
