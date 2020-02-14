//setting up my https downdown
var http = require("http");

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


server.listen(3000, function(){
    console.log("listening at 3000")
})








