var mongoose = require('mongoose')
var Dog = mongoose.model('Dog')
var dogs = require('../controllers/dogs.js')
module.exports = function(app){
  // GET '/' Displays all of the dogs.
  app.get('/', function(req,res){
    Dog.find({},function(err, results){
      if (err) {
        res.json(err)
      }else{
        res.render('index', {dogs:results})
      }
    })
  })
  // GET '/dogs/new' Displays a form for making a new mongoose.
  app.get('/dogs/new', function(req,res){
    res.render('new')
  })
  // GET '/dogs/:id' Displays information about one mongoose.
  app.get('/dogs/:id', function(req,res){
    Dog.findOne({_id:req.params.id}, function(err,results){
      if (err) {
        res.json(err)
      }else{
        // console.log (results.name)
        res.render('animal',{dog:results})
      }
    })
  })

  // POST '/dogs' Should be the action attribute for the form in the above route (GET '/dogs/new').
  app.post('/dogs', function(req,res){
    var dog = new Dog(req.body)
    dog.save(function(err){
      if (err) {
        res.json(err)
      }else{
        res.redirect('/')
      }
    })
  })
  // GET '/dogs/:id/edit' Should show a form to edit an existing mongoose.
  app.get('/dogs/:id/edit', function(req,res){
    Dog.findOne({_id:req.params.id}, function(err,results){
      // console.log(results)
      if (err) {
        res.json(err)
      }else{
        res.render('edit',{dog:results})
      }
    })
  })
  // POST '/dogs/:id' Should be the action attribute for the form in the above route (GET '/dogs/:id/edit').
  app.post('/dogs/:id',function(req,res){
    Dog.update({_id:req.params.id}, {name:req.body.name, description:req.body.description}, function(err){
      if (err) {
        res.json(err)
      }else{
        res.redirect('/')
      }
    })})

    // POST '/dogs/:id/destroy' Should delete the mongoose from the database by ID.
    app.post('/dogs/:id/destroy',function(req,res){
      console.log(req.params)
      console.log('here',Dog.find({_id:req.params.id}))

      Dog.remove({_id:req.params.id},function(err){
        if (err) {
          res.json(err)
        }else{
          res.redirect('/')
        }

      })
    })

}
