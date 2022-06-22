const { Model, Sequelize, DataTypes}= require("sequelize");
const PAGOS_TABLE = 'pagos';

const PagoSchema = {
  id: {
    primaryKey : true,
    type: DataTypes.UUID
  },
  NroTarjeta: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  FechaVencimienito: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  CVV: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  CorreoElectronico: {
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
  },
  DetalleVentaID : {
    type: DataTypes.UUID,
    field : 'detallev_id',
    allowNull : false,
    references: {
      model: 'detallevs'
    }
  }
};

class Pago extends Model {
  static associate(){
    this.belongsTo(models.detallev,{
      as: 'detallev'
    })
  }

  static config(sequelize){
    return {
      sequelize,
      tableName : PAGOS_TABLE,
      modelName : 'pago',
      timestamps : false
    };
  }
}

module.exports = {PAGOS_TABLE,PagoSchema, Pago}
