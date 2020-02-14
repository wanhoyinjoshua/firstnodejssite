//setting up my https downdown
var http = require("http");
const PORT = process.env.PORT || 3000;


var server = http.createServer(function(req , res ){
    res.writeHead(200, {'Content-Type':'text/html'});
    var url = req.url
        if(url==='/'){
            res.write("main");
        }
        if(url==='/home'){
            res.write("home");
        }
        if(url==='/work'){
            res.write("work");
        }
})
//server upup


server.listen(PORT,  function(){
    console.log("listening at 3000")
})










