var mongoose = require('mongoose')
var Dog = mongoose.model('Dog')
module.exports = {
  index: function(req,res){
    Dog.find({},function(err, results){
      if (err) {
        res.json(err)
      }else{
        res.render('index', {dogs:results})
      }
    })
  },

  show: function(req,res){
    Dog.findOne({_id:req.params.id}, function(err,results){
      if (err) {
        res.json(err)
      }else{
        // console.log (results.name)
        res.render('animal',{dog:results})
      }
    })
  },
  create: function(req,res){
    var dog = new Dog(req.body)
    dog.save(function(err){
      if (err) {
        res.json(err)
      }else{
        res.redirect('/')
      }
    })
  },

  update: function(req,res){
    Dog.update({_id:req.params.id}, {name:req.body.name, description:req.body.description}, function(err){
      if (err) {
        res.json(err)
      }else{
        res.redirect('/')
      }
    })
  },

    // POST '/dogs/:id/destroy' Should delete the mongoose from the database by ID.
    destroy: function(req,res){
      console.log(req.params)
      console.log('here',Dog.find({_id:req.params.id}))

      Dog.remove({_id:req.params.id},function(err){
        if (err) {
          res.json(err)
        }else{
          res.redirect('/')
        }

      })
    }

}
