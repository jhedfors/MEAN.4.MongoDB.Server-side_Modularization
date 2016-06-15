// require mongoose
var mongoose = require('mongoose');
// create the schema
var QuoteSchema = new mongoose.Schema({
  name:{type:String, required:true, minlength:2},
  quote:{type:String, required:true, minlength:2},
},{timestamps:true})
// register the schema as a model
var Quote = mongoose.model('Quote', QuoteSchema)
