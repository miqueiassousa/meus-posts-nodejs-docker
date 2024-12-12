const Sequelize = require('sequelize');

// Conexão com o banco de dados MySQL no Docker
const sequelize = new Sequelize('posts', 'root', 'root', { // Coloca posts root root pra docker
    host: 'db', // "db" é o nome do serviço do MySQL no Docker Compose
    dialect: 'mysql',
    logging: false, // Desativa o log do SQL no console (opcional)
    dialectOptions: {
        // Algumas opções de dialeto específicas do MySQL, por exemplo, para codificação de caracteres
        charset: 'utf8mb4', // Suporta emojis e caracteres especiais
    },
    pool: {
        max: 5,        // Número máximo de conexões no pool
        min: 0,        // Número mínimo de conexões no pool
        acquire: 30000, // Tempo máximo (ms) para tentar uma conexão antes de falhar
        idle: 10000,   // Tempo máximo (ms) que uma conexão pode ficar ociosa antes de ser liberada
    },
    retry: {
        max: 3, // Número máximo de tentativas de reconexão em caso de erro
    },
});

var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
