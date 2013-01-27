

function route(handle, pathname, response) {

    // alright, so the request comes in the form of a URL or button push.
    // let's assume it's a URL for the time being.
    // so assuming we get a request in the form of a URL, we need to parse that URL
    // so for each url, we need to have a specific response.
    
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type":"text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;

