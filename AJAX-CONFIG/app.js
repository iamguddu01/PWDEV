const  config = require('./config.json') // Any type of file can be import here i am importing JSON
console.log((`Appname :: ${config.name} -> version ::: ${config.version}`));