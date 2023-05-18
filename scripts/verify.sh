#!/bin/bash

function checkVersionAndId {
    idArg=$1
    versionArg=$2

    themeId="$(unzip -p  "${idArg}.zip" theme.json | jq -r '.id')"
    if [[ $idArg != "$themeId" ]]; then
        echo "Theme id for $idArg does NOT match!"
        exit 1
    else
        echo "theme ids match"
    fi

    themeVersion="$(unzip -p "${idArg}.zip" theme.json | jq -r '.version')"
    if [[ "$versionArg" != "$themeVersion" ]]; then
        echo "Versions for $idArg do NOT match!"
        exit 1
    else
        echo "versions match"
    fi
}

zip_dir="../data/themes"

# Change to the specified zip_dir
cd "$zip_dir" || exit 1


json_file="../themes.json"

# Read the contents of the JSON file
json=$(cat "$json_file")

# Extract the "sha256" and "id" values using jq
themes=$(echo "$json" | jq -r '.themes[] | "\(.sha256) \(.id) \(.version)"')

# Loop through each theme and print the "sha256" and "id" values
while read -r sha256 id version; do

    file="${id}.zip"
    if [[ -f "$file" ]]; then
        # Calculate the SHA256 hash
        sha256sum_output=$(sha256sum "$file")
        sha256_hash=${sha256sum_output%% *}

        # Check if match
        if [[ "$sha256" == "$sha256_hash" ]]; then
            echo "Theme $file hash matches hash in themes.json"
        else
            echo "Theme $file hash doe NOT match hash in themes.json!"
            exit 1
        fi

        # Check inside zip file
        checkVersionAndId "$id" "$version"

        echo

    else
        echo "Theme $file not found!"
        exit 1
    fi

done <<< "$themes"


