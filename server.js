var http = require("http");

var port = process.env.PORT || 8000;

console.log("starting http server on port", port);
http.createServer(function(request, response) {
    var content = "";
    request.on("data", function(chunk) {
        content += chunk;
    });
    request.addListener("end", function() {
        response.writeHead(200, {
            "Content-Type": "text/plain"
        });
        response.end("");
        console.log(request.url, content);
    }).resume();
}).listen(port);