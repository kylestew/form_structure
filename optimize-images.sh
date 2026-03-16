#!/usr/bin/env bash
set -euo pipefail

SRC="images-src"
OUT="images"

QUALITY=80
COVER_MAX=1200
PROJECT_MAX=1600
PORTRAIT_MAX_H=800

rm -rf "$OUT"

find "$SRC" -type d | while read -r dir; do
    mkdir -p "${dir/$SRC/$OUT}"
done

# Process JPEGs
find "$SRC" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) | while read -r src; do
    dst="${src/$SRC/$OUT}"
    # Normalize extension to .jpg
    dst="${dst%.*}.jpg"
    webp="${dst%.*}.webp"

    # Determine max dimension based on path
    if [[ "$src" == *"/covers/"* ]]; then
        resize="${COVER_MAX}x${COVER_MAX}>"
    elif [[ "$src" == *"art_avi_tall"* ]]; then
        resize="x${PORTRAIT_MAX_H}>"
    else
        resize="${PROJECT_MAX}x${PROJECT_MAX}>"
    fi

    echo "  jpg: $src -> $dst"
    magick "$src" -resize "$resize" -quality "$QUALITY" -strip "$dst"

    echo "  webp: $src -> $webp"
    magick "$src" -resize "$resize" -quality "$QUALITY" -strip -define webp:method=6 "$webp"
done

# Copy videos through unchanged
find "$SRC" -type f \( -iname '*.mp4' -o -iname '*.mov' -o -iname '*.webm' \) | while read -r src; do
    dst="${src/$SRC/$OUT}"
    echo "  copy: $src -> $dst"
    cp "$src" "$dst"
done

echo "Done. Output in $OUT/"
