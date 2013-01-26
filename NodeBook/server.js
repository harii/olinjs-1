
// "require" means import
var http = require("http");

// to turn this server into a module, like "http" above, we make a wrapper function
//  called "start" and "export" the function
function start() {
    // heads up, the argument to createServer is a function 
    //  we're quickly defining here on how to deal with requests and respond
    http.createServer(function(request, response) {
        
        console.log("Request received.");
        
        // now here we'll format the response from the server when it gets a request
        response.writeHead(200, {"Content-Type": "text/plain"}); // gotta specify the format
        response.write("Hello World"); // gotta specify what to say
        response.end(); // gotta specify that we're done
        
    }).listen(8888);
    console.log("Server has started.");
}

// here we export the wrapper function
exports.start = start;

