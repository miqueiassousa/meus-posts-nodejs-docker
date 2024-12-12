const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require('express-handlebars');
const path = require('path');
const postRoutes = require('./routes/postRoutes'); // Importando as rotas

const app = express();

// Configuração do Handlebars
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));

// Configurar o diretório das views
app.set('views', path.join(__dirname, 'views')); // Isso deve apontar para /usr/src/app/views dentro do contêiner
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Servir arquivos estáticos do node_modules (Bootstrap)
app.use(express.static(path.join(__dirname, 'node_modules')));

// Usando as rotas definidas no arquivo 'postRoutes.js'
app.use(postRoutes);  // As rotas agora estão centralizadas em postRoutes.js

module.exports = app; // Exporta a instância do app para o server.js
