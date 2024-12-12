/**
 * A pasta services/ é onde você pode organizar a lógica de negócio da sua aplicação.
 * A lógica de negócio refere-se a processos, cálculos e regras de como os dados devem ser manipulados ou como as ações devem ser executadas dentro da sua aplicação.
 * 
 * Essa pasta geralmente contém arquivos que fazem o trabalho de intermediar a interação entre o banco de dados,
 * as rotas e os modelos, além de realizar operações complexas de manipulação de dados, validações, chamadas de APIs externas, entre outros.
 * 
 * Exemplos do que pode ir para a pasta services/:
 * 1. PostService.js - Lógica de negócio para os posts
 * Suponha que você tenha uma lógica complexa para criar, editar ou excluir posts.
 * O arquivo PostService.js ficaria responsável por lidar com essas operações de forma organizada e desacoplada das rotas.
 * 
 * Vantagens de separar a lógica de negócio em services/:
 * - Facilidade de Manutenção: Se algum processo ou lógica precisar ser alterado, você pode fazer isso diretamente no serviço sem mexer nas rotas.
 * - Reusabilidade: Os métodos dentro de PostService podem ser reutilizados em diferentes partes da aplicação, o que economiza tempo e esforço.
 * - Melhor Leitura e Organização: As rotas ficam mais limpas e fáceis de entender, já que elas são mais responsáveis por redirecionar as requisições para a lógica de negócio.
 * - Testabilidade: Você pode testar a lógica de negócio de maneira mais independente e modular, já que ela está separada do código da aplicação web.
 * 
 * Exemplos adicionais de outros serviços:
 * - UserService.js: Responsável por lógica de negócio relacionada a usuários (como registro, autenticação, validação de senhas, etc.).
 * - AuthService.js: Responsável por autenticação de usuários (login, logout, gerenciamento de sessões).
 * - EmailService.js: Responsável pelo envio de e-mails (para notificações ou confirmação de cadastro).
 * - PaymentService.js: Responsável pela integração com APIs de pagamento, como Stripe ou PayPal.
 * 
 * Essa abordagem de separação entre controle de rota e lógica de negócios torna o código mais modular, legível e facilita a manutenção,
 * especialmente em projetos mais complexos.
 */



// services/PostService.js
const Post = require('../models/Post');  // Importando o modelo de Post

class PostService {
    // Criação de um post
    static async createPost(titulo, conteudo) {
        try {
            const newPost = await Post.create({
                titulo,
                conteudo
            });
            return newPost;  // Retorna o post criado
        } catch (error) {
            throw new Error("Erro ao criar o post: " + error.message);
        }
    }

    // Obter todos os posts
    static async getAllPosts() {
        try {
            const posts = await Post.findAll();
            return posts;
        } catch (error) {
            throw new Error("Erro ao obter os posts: " + error.message);
        }
    }

    // Excluir um post
    static async deletePost(id) {
        try {
            const post = await Post.findOne({ where: { id } });
            if (!post) throw new Error("Post não encontrado");
            await post.destroy();
            return true;  // Post deletado com sucesso
        } catch (error) {
            throw new Error("Erro ao excluir o post: " + error.message);
        }
    }

    // No arquivo services/PostService.js
    static async getPostById(id) {
        try {
            const post = await Post.findOne({ where: { id } });
            if (!post) throw new Error("Post não encontrado");
            return post;  // Retorna o post encontrado
        } catch (error) {
            throw new Error("Erro ao obter o post: " + error.message);
        }
    }

    // Atualizar um post
    static async updatePost(id, titulo, conteudo) {
        try {
            const post = await Post.findOne({ where: { id } });
            if (!post) throw new Error("Post não encontrado");

            post.titulo = titulo;
            post.conteudo = conteudo;
            await post.save();

            return post;  // Retorna o post atualizado
        } catch (error) {
            throw new Error("Erro ao atualizar o post: " + error.message);
        }
    }
}

module.exports = PostService;
