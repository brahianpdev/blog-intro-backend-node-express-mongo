class Say {
    async hello () {
        console.log("Hello");
    }

    async bye () {
        console.log("Bye");
    }
}

module.exports = new Say();