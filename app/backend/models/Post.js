// // Define o ambiente (produção ou desenvolvimento)
// const env = process.env.NODE_ENV || 'production';

// // require('../config/config.js') -> Arquivo [env] -> posição no array do objeto = Ex: config.production.database
// const config = require('../config/config.js')[env];

// // Carrega as variáveis de ambiente do arquivo .env
// const dotenv = require('dotenv').config();

// models/Post.js
const db = require('./db');

// Definir o modelo de Post
const Post = db.sequelize.define('posts', {
  titulo: {
    type: db.Sequelize.STRING
  },
  conteudo: {
    type: db.Sequelize.TEXT
  }
});

// Forçar a sincronização (deve ser usado com cuidado em produção)
Post.sync({ force: false }) // Altere para true se precisar recriar as tabelas
  .then(() => {
    console.log('Tabela posts criada!');
  })
  .catch(err => {
    console.log('Erro ao criar a tabela: ', err);
  });

module.exports = Post;
