const dotenv = require("dotenv");
dotenv.config();

const { MONGO_URL, PORT_APP } = process.env;

const config = {
  db: {
    mongo: MONGO_URL,
  },
  app: {
    port: PORT_APP,
  },
  ftp: {
    host: process.env.FTP_HOST,
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    port: process.env.FTP_PORT,
  }
};

module.exports = config;