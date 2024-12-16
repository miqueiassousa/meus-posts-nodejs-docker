const dotenv = require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const Sequelize = require('sequelize'); // Importa o Sequelize
const env = process.env.NODE_ENV || 'development'; // Define o ambiente (produção ou desenvolvimento)
const config = require('../config/config.js')[env]; // require('../config/config.js') -> Arquivo [env] -> posição no array do objeto = Ex: config.production.database

// Cria a instância do Sequelize com as configurações apropriadas
const sequelize = new Sequelize(
  config.database,      // Configuração do banco de dados
  config.username,      // Nome de usuário
  config.password,      // Senha do banco de dados
  {
    host: config.host,            // Endereço do host
    dialect: config.dialect,      // Tipo de banco (MySQL)
    logging: config.logging,      // Desabilitar logging 
    dialectOptions: { charset: config.charset },  // Configuração de charset
    pool: {                        // Pool de conexões
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    retry: { max: 3 },            // Configuração de retry
  }
);

// Exporta a instância do Sequelize
const db = {
  sequelize,
  Sequelize,
};

// Exporte o db para uso em outros módulos
module.exports = db;
