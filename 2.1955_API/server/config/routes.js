var mongoose = require('mongoose')
var NinteenFiftyFiver = mongoose.model('NinteenFiftyFiver')
var ninteenFiftyFivers = require('../controllers/ninteenFiftyFivers.js')
module.exports = function(app){
  // GET '/' will serve up the full collection of people born in 1955
  app.get('/', function(req,res){
    ninteenFiftyFivers.index(req,res)
  })
  // GET '/new/:name/' will add a name into the database. can be used for blank spaces, so adding Steve Jobs to our database, you'd type in the URL 'localhost:8000/new/Steve Jobs'
  app.get('/new/:name', function(req,res){
    ninteenFiftyFivers.create(req,res)
  })
  // GET '/remove/:name/' will delete a name from the database.
  app.get('/remove/:name', function(req,res){
    ninteenFiftyFivers.destroy(req,res)
  })
  // GET '/:name' will bring up the document of that particular person.
  app.get('/:name', function(req,res){
    ninteenFiftyFivers.show(req,res)
  })
}
