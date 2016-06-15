//import required modules
var express = require('express')
var mongoose = require('mongoose')

//setup APP
var app = express()

require('./server/config/mongoose.js')
var routes_setter = require('./server/config/routes.js')
routes_setter(app)
app.listen(8999, function(){
  console.log(8999);
})
