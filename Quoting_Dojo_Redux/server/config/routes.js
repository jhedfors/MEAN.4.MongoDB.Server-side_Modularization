var mongoose = require('mongoose')
var Quote = mongoose.model('Quote')
var quotes = require('../controllers/quotes.js')
module.exports = function(app){
  app.get('/', function(req,res){
    res.render('index')
  })
  app.post('/add_quote', function(req,res){
    quotes.create(req,res)
  })
  app.get('/quotes', function(req,res){
    quotes.show(req,res)
  })

}
