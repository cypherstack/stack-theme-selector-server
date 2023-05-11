function getThemeList() {
    const fs = require("fs");
    const json_file = fs.readFileSync("data/themes.json");
    const json = JSON.parse(json_file);
    const themes = json.themes;
    return themes;
}

module.exports = getThemeList;