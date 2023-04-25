#!/bin/bash

# Choose if you need to start console with proy or not
# withProxy="--proxy-config proxy.conf.json"
withProxy=""

echo "Go to code directory..."
cd /code || exit

echo "Update npm..."
npm install -g npm@9.5.0

echo "Install @angular/cli..."
npm i -g @angular/cli@15

echo "Run 'npm i' (take some coffee...)"
npm i

echo "Run 'ng serve' for dev !!"
ng serve --host 0.0.0.0 --disable-host-check "${withProxy}"
