#!/usr/bin/env bash

mkdir -p ~/Keys

pushd ~/Keys >/dev/null || exit

rm huntingdonresearch.srl

cat << EOF > huntingdonresearch.ext
basicConstraints=CA:TRUE
EOF

openssl genrsa -out huntingdonresearch.key 8192

openssl req -new -days 3653 -key huntingdonresearch.key -subj "/C=UK/ST=West Midlands/L=Solihull/O=Huntingdon Research/OU=Research and Development/emailAddress=info@huntingdonresearch.com/CN=Huntingdon Research" -out huntingdonresearch.pem

openssl x509 -req -days 3653 -in huntingdonresearch.pem -signkey huntingdonresearch.key -extfile huntingdonresearch.ext -out huntingdonresearch.pem

openssl x509 -inform PEM -outform DER -in huntingdonresearch.pem -out huntingdonresearch.crt

rm -f huntingdonresearch.pfx

openssl pkcs12 -export -out huntingdonresearch.pfx -inkey huntingdonresearch.key -in huntingdonresearch.pem

rm -rf huntingdonresearch.ext

popd >/dev/null || exit
