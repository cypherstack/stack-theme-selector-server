function getThemeList() {
    const fs = require("fs");
    const json_file = fs.readFileSync("data/themes.json");
    const json = JSON.parse(json_file);
    const themes = json.themes;
    var themeArray : Array<Object> = [];
    for (let i = 0; i < themes.length; i++) {
        var theme : Object = {
            "name": themes[i].name,
            "id": themes[i].id,
            "description": themes[i].description,
            "primary_color": themes[i].primary_color, // Primary color is background color in the theme
            "secondary_color": themes[i].secondary_color, // Secondary color is the color of the buttonBackPrimary in the theme
            "tertiary_color": themes[i].tertiary_color, // Tertiary color is the color of the buttonTextPrimary in the theme
        }
        themeArray.push(theme);
    }
    return themeArray;
}

module.exports = getThemeList;