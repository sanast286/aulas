// models/empresa.js

const { DataTypes } = require('sequelize')
const sequelize  = require('../sequelize.js')


const Empresa = sequelize.define('Empresa', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: DataTypes.STRING,
  nomeFantasia: DataTypes.STRING,
  enderecoCompleto: DataTypes.STRING,
  cnpjCpf: DataTypes.STRING,
  telefone: DataTypes.STRING,
  emails: DataTypes.STRING,
  valorTaxaAdministrativa: DataTypes.DECIMAL(10, 2),
  cobraTaxa: DataTypes.BOOLEAN
}, {
  timestamps: false
});

module.export = Empresa;
