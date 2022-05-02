const shell = require ('shelljs');

console.log ('Removing current version of IdentitySDK...');
shell.rm ('-Rf', 'builds/identity-sdk');
console.log ('Removed current version of IdentitySDK');

console.log (
  'Copying newest version of IdentitySDK into @ionic-native/plugins...'
);
shell.cp ('-R', 'src/identity-sdk', 'ionic-native/src/@ionic-native/plugins');
console.log ('Copied newest version of IdentitySDK into @ionic-native/plugins');

shell.cd ('ionic-native');

console.log ('Installing NPM packages...');
shell.exec ('npm install');
console.log ('NPM packages installed');

console.log ('Building @ionic-native...');
shell.exec ('npm run build');
console.log ('@ionic-native build finished');

shell.cd ('../');

console.log ('Moving new IdentifySDK bundle to build/ directory...');
shell.mv (
  '-f',
  'ionic-native/dist/@ionic-native/plugins/identity-sdk',
  'builds/'
);
console.log ('New IdentifySDK bundle moved into build/ directory');

console.log ('Removing new IdentifySDK bundle from @ionic-native/plugins directory...');
shell.rm ('-Rf', 'ionic-native/src/@ionic-native/plugins/identity-sdk');
console.log ('New IdentifySDK bundle removed from @ionive-native/plugins directory');

console.log ('Finished...');
