#!/bin/bash

ICONS="../icons.json"

echo "[" > $ICONS
for FILE in *.svg
do
    SVG=$(tr -d '\n' < $FILE)
    echo "{"\"name"\":"\"$FILE"\","\"content"\":"\"$SVG"\"}" >> $ICONS
    echo "," >> $ICONS
done

sed -i '' -e '$ d' $ICONS

echo "]" >> $ICONS

