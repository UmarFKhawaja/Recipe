#!/usr/bin/env bash

pushd .. >/dev/null || exit

cat << EOF > Apps/recipe-browser/.env
BROWSER_PORT="5080"
BROWSER_CRT_FILE="../../Keys/localhost.crt"
BROWSER_KEY_FILE="../../Keys/localhost.key"

SERVER_URL="https://localhost:5180"
EOF

cat << EOF > Apps/recipe-server/.env
CORS_ORIGIN="https://localhost:5080"

SERVER_PORT="5180"
SERVER_CRT_FILE="../../Keys/localhost.crt"
SERVER_KEY_FILE="../../Keys/localhost.key"

SESSION_DOMAIN="localhost"
SESSION_SECRET="the quick brown fox jumped over the lazy dog"

DATABASE_HOST="localhost"
DATABASE_PORT="53306"
DATABASE_USERNAME="recipe"
DATABASE_PASSWORD="Recipe123"
DATABASE_DATABASE="recipe"

CACHE_HOST="localhost"
CACHE_PORT="56379"
CACHE_PASSWORD="Recipe123"
CACHE_USE_TLS="false"
EOF

cat << EOF > Services/recipe/.env
DATABASE_HOST="localhost"
DATABASE_PORT="53306"
DATABASE_USERNAME="recipe"
DATABASE_PASSWORD="Recipe123"
DATABASE_DATABASE="recipe"

CACHE_HOST="localhost"
CACHE_PORT="56379"
CACHE_PASSWORD="Recipe123"
CACHE_USE_TLS="false"
EOF

popd >/dev/null || exit
