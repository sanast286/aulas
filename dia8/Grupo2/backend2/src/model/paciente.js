const { DataTypes } = require('sequelize');
const sequelize =  require('../sequelize.js');

const Paciente = sequelize.define('Paciente', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    endereco: DataTypes.STRING,
    complemento: DataTypes.STRING,
    nome: DataTypes.STRING,
    complemento: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    cep: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone1: DataTypes.STRING,
    telefone2: DataTypes.STRING,
    contato: DataTypes.STRING,
    codigoPagamento: DataTypes.STRING,
    identificacao: DataTypes.STRING,
    dataNascimento: DataTypes.DATEONLY,
    nomeMae: DataTypes.STRING,
    cpf: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Paciente'
  
  });
  
  module.exports =  Paciente;
  