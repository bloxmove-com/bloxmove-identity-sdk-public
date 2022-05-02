# identity-ionic-native-plugin

## What is it
This repository contains custom plugin for @ionic-native to use `identity-sdk-plugin` in `mobility-app`. 
Repository is using official `@ionic-native` repository as submodule to build up plugin.

## How to use
1. Clone this repo with additional flag `--recurse-submodules` e.g.
```
git clone --recurse-submodules https://github.com/bloxmove-com/identity-ionic-native-plugin.git
```
or init submodules after clone e.g.
```
git clone https://github.com/bloxmove-com/identity-ionic-native-plugin.git

cd identity-ionic-native-plugin

git submodule init

git submodule update
```
2. Run command `./build.sh`
3. Copy folder `identity-sdk` from `builds/` folder to `mobility-app/node_modules/@ionic-native/`
