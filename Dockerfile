# Usar uma imagem base do Node.js
FROM node:14

# Definir o diretório de trabalho no container
WORKDIR /usr/src/app/backend

COPY ./app /usr/src/app

# Instalar dependências no diretório de trabalho
RUN npm install

# Instalar o dockerize globalmente
RUN wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz \
    && tar -xzvf dockerize-linux-amd64-v0.6.1.tar.gz \
    && mv dockerize /usr/local/bin/

# Garantir permissões de execução para o arquivo server.js
RUN chmod +x /usr/src/app/backend/server.js

# Garantir que o script wait-for-it.sh tenha permissão de execução
RUN chmod +x /usr/src/app/wait-for-it.sh

# Expor a porta do servidor
EXPOSE 8080

# Comando para iniciar o servidor com o dockerize (aguardar o MySQL ficar disponível)
CMD ["dockerize", "-wait", "tcp://db:3306", "-timeout", "60s", "npm", "run", "dev"]
