function main() {
    console.log("Started main function");
    const startServer = require("./themeServer.js");
    const port = process.env.PORT || 3000;

    startServer(port);
}

main();