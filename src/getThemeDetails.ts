function getThemeDetails(id : string) {
    const fs = require("fs");
    const theme_file = fs.readFileSync("data/themes/" + id + ".zip");
    return theme_file;
}

module.exports = getThemeDetails;