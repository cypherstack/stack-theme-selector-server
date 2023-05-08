function getThemeList() {
    const fs = require("fs");
    const json_file = fs.readFileSync("data/themes.json");
    const json = JSON.parse(json_file);
    const themes = json.themes;
    var themeArray : Array<Object> = [];
    // For loop that will look for all the themes in the themes.json file
    Object.entries(themes).map(([key, value]) => {
        var theme : Object = {
            "name": themes[key].name,
            "id": themes[key].id,
            "description": themes[key].description,
            "primary_color": themes[key].primary_color, // Primary color is background color in the theme
            "secondary_color": themes[key].secondary_color, // Secondary color is the color of the buttonBackPrimary in the theme
            "tertiary_color": themes[key].tertiary_color, // Tertiary color is the color of the buttonTextPrimary in the theme
        }
        themeArray.push(theme);
    })
    return themeArray;
}

module.exports = getThemeList;