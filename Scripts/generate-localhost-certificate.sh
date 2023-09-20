#!/usr/bin/env bash

pushd .. >/dev/null || exit

mkdir -p Keys

pushd Keys >/dev/null || exit

rm -f localhost.cnf
cat << EOF > localhost.cnf
[req]
default_bits=4096
prompt=no
default_md=sha256
distinguished_name=dn

[dn]
C=UK
ST=West Midlands
L=Solihull
O=Huntingdon Research
OU=Research and Development
emailAddress=majordomo@huntingdonresearch.com
CN=Huntingdon Research
EOF

openssl req -new -sha256 -nodes -out localhost.csr -newkey rsa:4096 -keyout localhost.key -config <(cat localhost.cnf)

rm -f localhost.ext
cat << EOF > localhost.ext
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage=digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName=@alt_names

[alt_names]
DNS.1=localhost
EOF

if [ -e ~/Keys/huntingdonresearch.srl ]; then
  openssl x509 -req -in localhost.csr -CA ~/Keys/huntingdonresearch.pem -CAkey ~/Keys/huntingdonresearch.key -CAserial ~/Keys/huntingdonresearch.srl -out localhost.crt -days 365 -sha256 -extfile localhost.ext
else
  openssl x509 -req -in localhost.csr -CA ~/Keys/huntingdonresearch.pem -CAkey ~/Keys/huntingdonresearch.key -CAcreateserial -out localhost.crt -days 365 -sha256 -extfile localhost.ext
fi

rm -f localhost.pem
touch localhost.pem
cat localhost.crt >> localhost.pem
cat localhost.key >> localhost.pem

rm -f localhost.csr localhost.cnf localhost.ext

rm -rf localhost.pfx
openssl pkcs12 -export -out localhost.pfx -inkey localhost.key -in localhost.crt -certfile ~/Keys/huntingdonresearch.pem

popd >/dev/null || exit

popd >/dev/null || exit
