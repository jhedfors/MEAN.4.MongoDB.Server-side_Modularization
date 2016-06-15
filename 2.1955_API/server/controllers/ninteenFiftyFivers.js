var mongoose = require('mongoose')
var NinteenFiftyFiver = mongoose.model('NinteenFiftyFiver')
module.exports = {
  index: function(req,res){
    NinteenFiftyFiver.find({},function(err, results){
      if (err) {
        res.json(err)
      }else{
        res.json(results)
      }
    })
  },
  create: function(req,res){///new/:name
    console.log(req.params.name);
    var ninteenFiftyFiver = new NinteenFiftyFiver({name:req.params.name})
    ninteenFiftyFiver.save(function(err, results){
      if (err) {
        res.json(err)
      }else{
        res.json(results)
      }
    })
  },
  destroy: function(req,res){///remove/:name
    NinteenFiftyFiver.remove({name:req.params.name},function(err,results){
      if (err) {
        res.json(err)
      }else{
        res.json(results)
      }
    })
  },
  show: function(req,res){
    NinteenFiftyFiver.findOne({name:req.params.name}, function(err,results){
      if (err) {
        res.json(err)
      }else{
        res.json(results)
      }
    })
  }
}
