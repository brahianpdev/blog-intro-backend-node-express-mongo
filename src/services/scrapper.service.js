const provider = require('../scrapers/provider.js');

class ScrapperService {
    constructor() { }

    async scrap() {
        return await provider.scrap();
    }
}

module.exports = new ScrapperService();