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
