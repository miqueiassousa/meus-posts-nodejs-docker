# Usar uma imagem base do Node.js
FROM node:14

# Definir o diretório de trabalho no container
WORKDIR /usr/src/app

# Copiar o package.json e package-lock.json para o diretório de trabalho
COPY ./app/backend/package*.json ./

# Instalar dependências no diretório de trabalho
RUN npm install

# Instalar o dockerize globalmente
RUN wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz \
    && tar -xzvf dockerize-linux-amd64-v0.6.1.tar.gz \
    && mv dockerize /usr/local/bin/

# Copiar o restante do código do backend para o container
COPY ./app/backend ./backend

# Copiar os arquivos estáticos (frontend)
COPY ./app/frontend/public ./frontend/public

# Copiar o script wait-for-it.sh para o diretório do container
COPY ./wait-for-it.sh /usr/src/app/wait-for-it.sh

# Copiar o arquivo .env da pasta backend para o diretório correto dentro do container
COPY ./app/backend/.env ./backend/.env

# Garantir permissões de execução para o arquivo server.js
RUN chmod +x /usr/src/app/backend/server.js

# Garantir que o script wait-for-it.sh tenha permissão de execução
RUN chmod +x /usr/src/app/wait-for-it.sh

# Copiar os arquivos das views para o diretório correto dentro de backend
COPY ./app/backend/views /usr/src/app/backend/views

# Expor a porta do servidor
EXPOSE 8080

# Comando para iniciar o servidor com o dockerize (aguardar o MySQL ficar disponível)
CMD ["dockerize", "-wait", "tcp://db:3306", "-timeout", "60s", "npm", "run", "dev"]
