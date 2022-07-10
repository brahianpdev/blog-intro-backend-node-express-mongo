const scrapperService = require("./scrapper.service");

class CronJobService {
    constructor() { }

    async scrapProvider() {
        await scrapperService.scrap();
    }

}

module.exports = new CronJobService();
