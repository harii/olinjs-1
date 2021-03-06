
// "require" means import
var http = require("http"); 
var url = require("url");

// to turn this server into a module, like "http" above, we make a wrapper function
//  called "start" and "export" the function

function start(route, handle) {
    http.createServer(function(request, response) {

        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        // we expect the encoding of received data to be UTF-8
        request.setEncoding("utf8");

        // event listener for "data" event fills postData variable whenever
        //   new chunks of POST data arrives
        
 // PRETTY CONFUSED ABOUT HOW THIS POST DATA STUFF WORKS
 // HEY IT'S NOT WORKING
        
        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '" + postDataChunk + "'.");
        });

        // call to router activated in "end" callback so it's only called
        //   when all POST data is gathered.
        // Also passing POST data into router for use by request handlers.
        request.addListener("end",function() {
            route(handle, pathname, response, postData);
        });

    }).listen(8888);
    console.log("Server has started.");
    
}

exports.start = start;

