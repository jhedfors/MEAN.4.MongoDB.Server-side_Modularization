var mongoose = require('mongoose')
var Dog = mongoose.model('Dog')
var dogs = require('../controllers/dogs.js')
module.exports = function(app){
  // GET '/' Displays all of the dogs.
  app.get('/', function(req,res){
     dogs.index(req,res)
  })
  // GET '/dogs/new' Displays a form for making a new mongoose.
  app.get('/dogs/new', function(req,res){
    res.render('new')
  })
  // GET '/dogs/:id' Displays information about one mongoose.
  app.get('/dogs/:id', function(req,res){
    dogs.show(req,res)
  })
  // POST '/dogs' Should be the action attribute for the form in the above route (GET '/dogs/new').
  app.post('/dogs', function(req,res){
    dogs.create(req,res)
  })
  // GET '/dogs/:id/edit' Should show a form to edit an existing mongoose.
  app.get('/dogs/:id/edit', function(req,res){
    dogs.edit(req,res)
  })
  // POST '/dogs/:id' Should be the action attribute for the form in the above route (GET '/dogs/:id/edit').
  app.post('/dogs/:id',function(req,res){
    dogs.update(req,res)
  })
    // POST '/dogs/:id/destroy' Should delete the mongoose from the database by ID.
  app.post('/dogs/:id/destroy',function(req,res){
    dogs.destroy(req,res)
  })
}
