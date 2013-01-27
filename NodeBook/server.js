
// "require" means import
var http = require("http");
var router = require("./router");

// to turn this server into a module, like "http" above, we make a wrapper function
//  called "start" and "export" the function

function start() {
    // heads up, the argument to createServer is a function 
    //  we're quickly defining here on how to deal with requests and respond
    http.createServer(function(request, response) {
        console.log("Request received.");
        router.route(response);
    }).listen(8888);
    console.log("Server has started.");
}

// here we export the wrapper function
exports.start = start;

