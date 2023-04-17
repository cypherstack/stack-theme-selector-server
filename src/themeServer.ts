function startServer(port : number) {
    console.log("Started startServer function")
    const express = require("express");
    const getThemeList = require("./getThemeList.js");
    const getThemeDetails = require("./getThemeDetails.js");
    const app = express();
    const cors = require("cors");
    
    app.use(cors());

    var themeListReqCounter = 0;
    app.get("/themelist", (req : any, res : any) => {
        themeListReqCounter++;
        console.log("Got request on /themelist, request number " + themeListReqCounter)
        res.send(getThemeList());
    });

    var themeDetailsReqCounter = 0;
    app.get("/themedetails/:id", (req : any, res : any) => {
        themeDetailsReqCounter++;
        console.log("Got request on /themedetails/" + req.params.id + ", request number " + themeDetailsReqCounter)
        res.send(getThemeDetails(req.params.id));
    });

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
}

module.exports = startServer;