const { Router } = require("express");
const routes = Router();

const cronjobService = require("../services/cron.service");

routes.post('/ftp', (req, res) => {
    cronjobService.scrapProvider();

    res.status(200).send('Ok');
});

module.exports = routes;