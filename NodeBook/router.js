

function router(handle, pathname) {

    // alright, so the request comes in the form of a URL or button push.
    // let's assume it's a URL for the time being.
    // so assuming we get a request in the form of a URL, we need to parse that URL
    // so for each url, we need to have a specific response.
    
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname]();
    } else {
        console.log("No request handler found for " + pathname);
    }
}

exports.route = router;

