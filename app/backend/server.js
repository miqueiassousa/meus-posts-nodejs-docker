const app = require('./app'); // Importa a instância do app do arquivo app.js
const db = require('./models/db'); // Importa a conexão com o banco de dados

// Sincroniza o banco de dados (cria as tabelas se não existirem)
db.sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar o banco de dados:', err);
  });

// Iniciar o servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na url http://localhost:${PORT}`);
});

