const ftp = require("basic-ftp");

const config = require("../config");
const localPath = './src/ftp-files/testing.md';
const remotePath = 'testing.md';

class FtpService {
    constructor() {
        this.client = new ftp.Client();
    }

    async connect() {
        this.client.ftp.verbose = true;
        await this.client.access(config.ftp);
        console.log('Connected to FTP');

        await this.download();
        await this.disconnect();
    }

    async download() {
        await this.client.downloadTo(localPath, remotePath);
        console.log('Downloaded testing.md from FTP');
    }

    async disconnect() {
        await this.client.close();
        console.log('Disconnected from FTP');
    }
}

module.exports = new FtpService();