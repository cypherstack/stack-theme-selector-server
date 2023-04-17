function getThemeDetails(id : string) {
    const fs = require("fs");
    const json_file = fs.readFileSync("data/themes.json");
    const json = JSON.parse(json_file);
    const themes = json.themes;
    for (let i = 0; i < themes.length; i++) {
        if (themes[i].id == id) {
            return themes[i];
        }
    }
}

module.exports = getThemeDetails;