var mongoose = require('mongoose')
var NinteenFiftyFiverSchema = mongoose.Schema({
  name:{type:String, required:true, minlength:2}
},{timestamps:true})
var NinteenFiftyFiver = mongoose.model('NinteenFiftyFiver', NinteenFiftyFiverSchema)
