const ftp = require("basic-ftp");

class FtpService {
    constructor(config) {

        this.credentials = config.credentials;
        this.localPath = config.localPath;
        this.remotePath = config.remotePath;

        this.client = new ftp.Client();
    }

    async run() {
        this.client.ftp.verbose = true;
        await this.client.access(this.credentials);
        console.log('Connected to FTP');

        await this.download();
        await this.disconnect();
    }

    async download() {
        await this.client.downloadTo(this.localPath, this.remotePath);
        console.log('Downloaded file from FTP');
    }

    async disconnect() {
        await this.client.close();
        console.log('Disconnected from FTP');
    }
}

module.exports = FtpService;
