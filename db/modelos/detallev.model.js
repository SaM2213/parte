const { Model, Sequelize, DataTypes}= require("sequelize");
const DETALLEV_TABLE = 'detallevs';

const DetallevSchema = {
  id: {
    primaryKey : true,
    type: DataTypes.UUID
  },
  Cantidad: {
    allowNull: false,
    type: DataTypes.DECIMAL,
    unique: true
  },
  precioUnitario: {
    allowNull: false,
    type: DataTypes.DECIMAL
  },
  NombreProducto: {
    allowNull: true,
    type: DataTypes.STRING
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
  ClienteID : {
    type: DataTypes.UUID,
    field : 'cliente_id',
    allowNull : false,
    references: {
      model: 'cliente'
    }
  }
};

class Detallev extends Model {
  static associate(){
    // this.belongsTo(models.cliente,{
    //   as: 'cliente'
    // })
  }

  static config(sequelize){
    return {
      sequelize,
      tableName : DETALLEV_TABLE,
      modelName : 'detallev',
      timestamps : false
    };
  }
}

module.exports = {DETALLEV_TABLE,DetallevSchema, Detallev}
