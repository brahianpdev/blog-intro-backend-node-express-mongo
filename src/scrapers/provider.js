const ftpService = require('../services/ftp.service');
const { provider } = require('../config');


class Scrapper {
    constructor(config) {
        this.ftpService = new ftpService(config);
    }

    async scrap() {
        return await this.ftpService.run();
    }
}

module.exports = new Scrapper(provider);