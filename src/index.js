const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cron = require('node-cron');

const config = require('./config/config');
const cronjobService = require('./services/cron.service');
const indexRoutes = require('./routes');

mongoose
  .connect(config.db.mongo)
  .then((res) => {

    const app = express();

    app.use(
      express.urlencoded({
        extended: true,
      })
    );

    app.use(express.json());

    app.use(cors());

    app.use("/", indexRoutes);

    cron.schedule('00 22 * * *', function () {
      cronjobService.scrapProvider();
    });

    app.listen(config.app.port, () => {
      console.log(`🔥 Server is running at port ${config.app.port}`);
    });

    console.log("Connected to MongoDB");
  })
  .catch((error) => console.log(error));
