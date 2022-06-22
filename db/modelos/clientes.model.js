const { Model, Sequelize, DataTypes}= require("sequelize");
const CLIENTES_TABLE = 'cliente';

const ClienteSchema = {
  id: {
    primaryKey : true,
    type: DataTypes.UUID
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  apellido: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  numero: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
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
  }
};

class Cliente extends Model {
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName : CLIENTES_TABLE,
      modelName : 'cliente',
      timestamps : false
    };
  }
}

module.exports = {CLIENTES_TABLE,ClienteSchema, Cliente}
