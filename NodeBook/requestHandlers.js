// how to deal requests

var querystring = require("querystring");

function start(response, postData) {
    console.log("Request handler 'start' was called.");

    var body = '<html>'+
      '<head>'+
      '<meta http-equiv="Content-Type" content="text/html; '+
      'charset=UTF-8" />'+
      '</head>'+
      '<body>'+
      '<form action="/upload" method="post">'+
      '<textarea name="text" rows="20" cols="60"></textarea>'+
      '<input type="submit" value="Submit text" />'+
      '</form>'+
      '</body>'+
      '</html>';

    response.writeHead(200, {"Content-Type": "text/html"}); // gotta specify the format
    response.write(body); // gotta specify what to say
    response.end(); // gotta specify that we're done
}

function upload(response, postData) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"}); // gotta specify the format
    response.write("You've sent the text: " + 
    // querystring pulls out just the text from the submission form
    querystring.parse(postData).text); // gotta specify what to say
    response.end(); // gotta specify that we're done
}

exports.start = start;
exports.upload = upload;
