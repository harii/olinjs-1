
// here we create a var "server" that contains the "server" module we exported.
//  the "./" indicates the directory that this file is in.
var server = require("./server");

// here we call the "start" method we exported in the server module.
server.start();

