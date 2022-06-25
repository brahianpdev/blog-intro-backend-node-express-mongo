const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const config = require('./config');
const cronService = require("./services/cron.service");
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

    cronService.syncAllDays();

    app.listen(config.app.port, () => {
      console.log(`🔥 Server is running at port ${config.app.port}`);
    });

    console.log("Connected to MongoDB");
  })
  .catch((error) => console.log(error));
