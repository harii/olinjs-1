
// here we create a var "server" that contains the "server" module we exported.
//  the "./" indicates the directory that this file is in.
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");


var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

// here we ask the server to start - it's how we exported it
server.start(router.route, handle);

