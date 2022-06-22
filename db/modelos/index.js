const { PRODUCTO_TABLE, ProductoSchema, Producto}= require("./producto.model");

const { TIENDA_TABLE, TiendaSchema, Tienda}= require("./tienda.model");

const { CLIENTES_TABLE, ClienteSchema, Cliente}= require("./clientes.model");

const { PAGOS_TABLE, PagoSchema, Pago}= require("./pago.model");

const { DETALLEV_TABLE, DetallevSchema, Detallev}= require("./detallev.model");

function setupModels(sequelize) {
  Producto.init(ProductoSchema, Producto.config(sequelize));
  Tienda.init(TiendaSchema, Tienda.config(sequelize));
  Cliente.init(ClienteSchema, Cliente.config(sequelize));
  Pago.init(PagoSchema, Pago.config(sequelize));
  Detallev.init(DetallevSchema, Detallev.config(sequelize));

  Tienda.associate(sequelize.models);
  Detallev.associate(sequelize.models);
  Producto.associate(sequelize.models);
}

module.exports = { setupModels };
