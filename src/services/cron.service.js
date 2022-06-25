const cron = require('node-cron');

const ftpService = require('./ftp.service');

class CronService {
    constructor() {
        this.cronJobs = [];
    }

    async syncAllDays() {
        this.cronJobs.push(cron.schedule('00 00 * * *', async () => {
            console.log('Sincronizando todos los dias a las 00:00');

            await ftpService.connect();
            await this.sync();
        }));
    }
}

module.exports = new CronService();