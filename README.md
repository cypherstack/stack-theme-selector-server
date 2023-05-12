# Stack-Theme-Selector-Server

This is the repository for the Stack Theme Selector Server. This server is used to provide the theme selector for the Stack Wallet.


## Creating a theme (WIP)
- Theme id must be unique
- Theme zip file name must be the theme id
- The [themes.json](data/themes.json) file must be updated with (at least) the theme id and the sha256 hash of the zip file
- The `previewImageUrl` should point to an image located in [data/previews](data/previews)
- The preview image should match the preview image in the theme zip file
- See the current [Model](https://github.com/cypherstack/stack_wallet/blob/themes/lib/models/isar/stack_theme.dart) for minimum theme requirements (subject to change)

## Editing a theme
- Extract zip of theme and make any changes
- Create new archive
- Update [themes.json](data/themes.json) file
