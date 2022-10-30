const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const enviromentConfig = require("./config/config.enviroment");
const routes = require("./config/config.routes");

mongoose
  .connect(enviromentConfig.db.mongo)
  .then((res) => {
    const app = express();

    app.use(
      express.urlencoded({
        extended: true,
      })
    );

    app.use(express.json());

    app.use(cors());

    app.use("/", routes);

    app.listen(config.app.port, () => {
      console.log(`🔥 Server is running at port ${config.app.port}`);
    });

    console.log("Connected to MongoDB");
  })
  .catch((error) => console.log(error));
