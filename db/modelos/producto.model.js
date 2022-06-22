const { Model, Sequelize, DataTypes}= require("sequelize");
const PRODUCTO_TABLE = 'productos';

const ProductoSchema = {
  id: {
    primaryKey : true,
    type: DataTypes.UUID
  },
  nombrefunko: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  precio: {
    allowNull: false,
    type: DataTypes.DECIMAL
  },
  imagen: {
    allowNull: true,
    type: DataTypes.STRING
  },
  esVisible:{
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  createdAt : {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  updatedAt : {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW
  },
  tiendaID : {
    type: DataTypes.UUID,
    field : 'tienda_id',
    allowNull : true,
    references: {
      model: 'tiendas'
    }
  }
};

class Producto extends Model {
  static associate(){
    // this.belongsTo(models.tienda,{
    //   as: 'tienda'
    // })
  }

  static config(sequelize){
    return {
      sequelize,
      tableName : PRODUCTO_TABLE,
      modelName : 'producto',
      timestamps : false
    };
  }
}

module.exports = {PRODUCTO_TABLE,ProductoSchema, Producto}
