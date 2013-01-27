// alright here i'm gonna try and write the code that 
//  figures out wtf to do with different types of requests.

// i guess it'll be useful to import the server module, because technically
//  this router is in the server. not sure how that works.

// um, I think I'll turn THIS into a module, like a helper function, and then
//  import it into server.js, where it'll be used with the rest of the server.
//  I think that makes more sense.

//var http = require("http");


function router(response) {
    
    // alright, so the request comes in the form of a URL or button push.
    // let's assume it's a URL for the time being.
    // so assuming we get a request in the form of a URL, we need to parse that URL
    // so for each url, we need to have a specific response.
    
    // now here we'll format the response from the server when it gets a request
    response.writeHead(200, {"Content-Type": "text/plain"}); // gotta specify the format
    response.write("Hello World"); // gotta specify what to say
    response.end(); // gotta specify that we're done
     
}

exports.route = router;

