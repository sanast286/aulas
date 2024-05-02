const { DataTypes } = require('sequelize');
const sequelize =  require('./sequelize.js');


const musica = sequelize.define('musica', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: DataTypes.STRING,
    dataRegistro: DataTypes.DATEONLY,
}, {
    timestamps: false,
    tableName: 'musica'
  
  });
  
  module.exports =  musica;
  