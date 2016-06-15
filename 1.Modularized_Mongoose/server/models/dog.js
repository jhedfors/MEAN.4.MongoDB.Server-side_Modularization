//require mongoose
var mongoose = require('mongoose')
//create the schema
var DogSchema = new mongoose.Schema({
  name:{type:String, required:true, minlength:2},
  description:{type:String,required:true, minlength:2}
},{timestamps:true})
//register the schema
var Dog = mongoose.model('Dog',DogSchema)
