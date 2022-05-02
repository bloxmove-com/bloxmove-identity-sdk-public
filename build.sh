#!/bin/bash
# install dependency
docker run --rm --volume $PWD:/build -u node node:16 sh -c "cd /build/ && npm install && npm run build"

# Prompts the user copy folder identity-sdk from builds/ folder to mobility-app/node_modules/@ionic-native/
echo ""
echo "---------------------------------------------------------------------------"
echo "SDK built successfully, please copy folder identity-sdk from builds/ folder"
echo "---------------------------------------------------------------------------"
