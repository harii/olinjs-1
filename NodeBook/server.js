
// "require" means import
var http = require("http"); 
var url = require("url");

// to turn this server into a module, like "http" above, we make a wrapper function
//  called "start" and "export" the function

function start(route, handle) {
    http.createServer(function(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(handle, pathname, response);



    }).listen(8888);
    console.log("Server has started.");
}

// here we export the wrapper function
exports.start = start;

