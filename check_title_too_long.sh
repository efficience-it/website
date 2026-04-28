#!/bin/bash

THRESHOLD=60
ROOT=${1:-./src/app}

echo "=== Recherche des titres > $THRESHOLD caractères ==="
echo ""

found=0

while IFS= read -r file; do
  in_metadata=0
  while IFS= read -r file_line; do
    echo "$file_line" | grep -q "export const metadata" && in_metadata=1
    echo "$file_line" | grep -q "^}" && in_metadata=0

    [ "$in_metadata" -eq 0 ] && continue

    value=$(echo "$file_line" | sed -n 's/.*title:[[:space:]]*["\x27]\([^"\x27]*\)["\x27].*/\1/p')

    [ -z "$value" ] && continue

    len=${#value}
    if [ "$len" -gt "$THRESHOLD" ]; then
      echo "📄 $file"
      echo "   ↳ ($len cars) $value"
      echo ""
      found=$((found + 1))
    fi
  done < "$file"
done < <(find "$ROOT" -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" \) \
         ! -path "*/node_modules/*" ! -path "*/.next/*")

if [ "$found" -eq 0 ]; then
  echo "✅ Aucun titre dépassant $THRESHOLD caractères trouvé."
else
  echo "⚠️  $found titre(s) à vérifier."
fi