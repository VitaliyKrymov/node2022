const {greeting,test} = require('./app.js')
const os = require("os");
const path = require("path");

greeting("Sofia");
test();

console.log(os.cpus());
const pathfile = path.join("app");
console.log(pathfile);
