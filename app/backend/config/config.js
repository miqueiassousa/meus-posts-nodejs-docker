require('dotenv').config();

module.exports = {
  production: {
    database: process.env.DB_NAME_PROD,
    username: process.env.DB_USER_PROD,
    password: process.env.DB_PASSWORD_PROD,
    host: process.env.DB_HOST_PROD,
    port: process.env.DB_PORT_PROD,
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
      charset: 'utf8mb4',
    },
  },
  development: {
    database: process.env.DB_NAME_DEV,
    username: process.env.DB_USER_DEV,
    password: process.env.DB_PASSWORD_DEV,
    host: process.env.DB_HOST_DEV,
    port: process.env.DB_PORT_DEV,
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
      charset: 'utf8mb4',
    },
  },
};
