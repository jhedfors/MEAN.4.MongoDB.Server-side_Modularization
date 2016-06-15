//import required modules
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var mongoose = require('mongoose')

//setup APP
var app = express()
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, '/client/views'))
app.use(express.static(__dirname + '/client/static'))
app.use(bodyParser.urlencoded({extended:true}))


require('./server/config/mongoose.js')
////////////////MODELS/////////////////////



///////////////ROUTES////////////////
var routes_setter = require('./server/config/routes.js')
routes_setter(app)
///////////web server/////////
app.listen(8888, function(){
  console.log('8888');
})
