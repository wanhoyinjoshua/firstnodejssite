//setting up my https downdown
var http = require("http");
var server_port = process.env.YOUR_PORT || 80 ;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

var server = http.createServer(function(req , res ){
    res.writeHead(200, {'Content-Type':'text/html'});
    var url = req.url
        if(url==='/home'){
            res.write("home");
        }
        if(url==='/work'){
            res.write("work");
        }
})
//server upup


server.listen(server_port, server_host, function(){
    console.log("listening at 3000")
})










