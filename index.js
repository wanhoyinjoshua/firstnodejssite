//set up my https 

var http = require("http");
const path = require('path');
const express = require("express");
var router = express.Router();
const bodyParser= require('body-parser')




var app = express();
//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://wanhoyinjoshua:8sr^3B=81@cluster0-qbtjq.mongodb.net/local_library?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));







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


