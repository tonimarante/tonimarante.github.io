#!/bin/bash
ROOT="$HOME/Vimwiki_html/"
#HTTP="/"
OUTPUT="$HOME/Vimwiki_html/index.htm" 
cat "$HOME/Vimwiki_html/READMEbase.htm" > "$OUTPUT"
echo "<UL>" >> "$OUTPUT"
for filepath in $(find "$ROOT"  -maxdepth 10 -mindepth 1 -name '*.html' | sort); do
    FITXER=$(basename "$filepath")
    RUTA=${filepath:22}
    #echo "    <LI> <font size="+1" face="Arial"> <a href=\"$RUTA\">  $FITXER</a></LI>" >> "$OUTPUT"
    echo "    <LI> <font size="+1" face="Liberation Mono"> <a href=\"$RUTA\">  $FITXER</a></LI>" >> "$OUTPUT"
done
echo "</UL>" >> "$OUTPUT"
echo "</body>" >> "$OUTPUT"
echo "</html>" >> "$OUTPUT"

#git pull
git add .
git commit
git push


