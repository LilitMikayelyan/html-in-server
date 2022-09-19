var http = require('http'),
    fs = require('fs'),
    url = require('url');
 
 var cat ={
    positionx : 0,
    positiony : 0
 }


http.createServer(function (req, res) {
    var query = url.parse(req.url,true).query;
    var right = query.right;
    var top = query.top;
    cat.positionx += right;
    cat.positiony += top;
    fs.readFile( function () {
            res.writeHead(200,{'Content-type' :'text/html'});
            
            res.end('<html><head></head><body><p>html</p></body></html>');
        
    });
}).listen(3000);
console.log("Server running at http://localhost:3000/");