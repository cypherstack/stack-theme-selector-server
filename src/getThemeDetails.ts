function getThemeDetails(id : string) {
    const fs = require("fs");
    const json_file = fs.readFileSync("data/themes.json");
    const json = JSON.parse(json_file);
    const themes = json.themes;
    var theme = {};
    Object.entries(themes).map(([key, value]) => {
        if (key == id){
            theme = (themes[key])
        }
    });
    return theme
}

module.exports = getThemeDetails;