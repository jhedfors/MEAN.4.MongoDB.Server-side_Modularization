//import required modules
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var mongoose = require('mongoose')


//setup App
var app = express()
app.set('view engine','ejs')
app.set('views',path.join(__dirname, '/client/views'))
app.use(express.static(__dirname +'/client/static'))
app.use(bodyParser.urlencoded({extended:true }))

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');

//ROUTES
var routes_setter = require('./server/config/routes.js')
routes_setter(app)

//WEB SERVER
app.listen(8000,function(){
  console.log('8000');
})
