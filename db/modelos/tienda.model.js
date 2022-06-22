const { Model, Sequelize, DataTypes}= require("sequelize");
const TIENDA_TABLE = 'tiendas';

const TiendaSchema = {
  id: {
    primaryKey : true,
    type: DataTypes.UUID
  },
  nombre: {
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

class Tienda extends Model {
  static associate(){
    // this.hasMany(models.producto,{
    //   foreignKey: 'tiendaID'
    // });
  }

  static config(sequelize){
    return {
      sequelize,
      tableName : TIENDA_TABLE,
      modelName : 'tienda',
      timestamps : false
    };
  }
}

module.exports = {TIENDA_TABLE,TiendaSchema, Tienda}
