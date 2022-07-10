const path = require("path");

module.exports = {
    credentials: {
        host: process.env.FTP_HOST,
        user: process.env.FTP_USER,
        password: process.env.FTP_PASSWORD,
        port: process.env.FTP_PORT,
    },
    localPath: path.join(__dirname, "../temp", "provider.csv"),
    remotePath: 'provider.csv',
}

