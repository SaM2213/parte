const { Sequelize } = require('sequelize');
const { setupModels } = require('../db/modelos');

const user = 'usuario01';
const host = 'localhost';
const port = 5432;
const password = '1234';
const database = 'bdfunko';

const USUARIO = encodeURIComponent(user);
const PASSWORD = encodeURIComponent(password);

const URI = `postgres://${USUARIO}:${PASSWORD}@${host}:${port}/${database}`;

const sequelize = new Sequelize (URI, {
  dialect : 'postgres',
  logging : console.log
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
