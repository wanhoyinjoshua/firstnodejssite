//set up my https 

var http = require("http");
const path = require('path');
const express = require("express");
var router = express.Router();
const bodyParser= require('body-parser')




var app = express();










app.get('/',(req,res)=>{
    res.render('index', {msg:'welcome'});
    console.log("HIHIIHIHI")

})



app.listen(app.get('port'),()=>{
    console.log(`You are listeining to ${app.get('port')}`);
});


