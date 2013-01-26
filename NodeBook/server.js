
// "require" means import
// so we imported the http module.
var http = require("http");

//we're gonna use the http module to create a server
// heads up, the argument to createServer is a function 
//  we're quickly defining here on how to deal with requests and respond
http.createServer(function(request, response) {
    
    console.log("Request received.");
    
    // now here we'll format the response from the server when it gets a request
    response.writeHead(200, {"Content-Type": "text/plain"}); // gotta specify the format
    response.write("Hello World"); // gotta specify what to say
    response.end(); // gotta specify that we're done
    
}).listen(8888);  // cool, yo server, just chill and listen at port 8888.

console.log("Server has started.");


