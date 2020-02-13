//set up my https 

var http = require("http");
const path = require('path');
const express = require("express");
var router = express.Router();
const bodyParser= require('body-parser')











app.set('views',path.join(__dirname , 'views'));
app.set('view engine','pug');
app.set('port',3000);
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}));


app.get('/',(req,res)=>{
    res.render('index', {msg:'welcome'});
    console.log("HIHIIHIHI")

})
app.post('/success',(req,res)=>{
    console.log("yayy");
    res.render('personalpage');
    console.log(req.body)

   
})


app.listen(app.get('port'),()=>{
    console.log(`You are listeining to ${app.get('port')}`);
});


