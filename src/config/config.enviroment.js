const dotenv = require("dotenv");
dotenv.config();

const { MONGO_URL, PORT_APP } = process.env;

const config = {
  db: {
    mongo: MONGO_URL,
  },
  app: {
    port: PORT_APP,
  }
};

module.exports = config;