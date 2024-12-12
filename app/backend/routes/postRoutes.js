// routes/postRoutes.js
const express = require('express');
const PostService = require('../services/PostService');  // Importando o serviço
const router = express.Router();

// Rota de cadastro
router.get('/cadastro', (req, res) => {
    res.render('formulario');
});

// Rota para criar um post
router.post('/add', async (req, res) => {
    try {
        await PostService.createPost(req.body.titulo, req.body.conteudo);
        res.render('add');
    } catch (error) {
        res.send("Houve um erro: " + error.message);
    }
});

// Rota para exibir todos os posts
router.get('/', async (req, res) => {
    try {
        const posts = await PostService.getAllPosts();
        res.render('home', { posts: posts });
    } catch (error) {
        res.send("Erro ao carregar os posts: " + error.message);
    }
});

// Rota para deletar um post
router.get('/deletar/:id', async (req, res) => {
    try {
        await PostService.deletePost(req.params.id);
        const msg = "Postagem deletada com sucesso";
        res.render('delete', { msg: msg });
    } catch (error) {
        const msg = "Esta postagem não foi deletada: " + error.message;
        res.render('delete', { msg: msg });
    }
});

// Rota para editar um post
router.get("/edit/:id", async (req, res) => {
    try {
        const post = await PostService.getPostById(req.params.id);
        res.render('editposts', { post: post });
    } catch (erro) {
        res.redirect("/");
    }
});

// Rota para atualizar um post
router.post("/edit", async (req, res) => {
    try {
        await PostService.updatePost(req.body.id, req.body.titulo, req.body.conteudo);
        res.redirect("/");
    } catch (erro) {
        res.redirect("/");
    }
});

module.exports = router;
