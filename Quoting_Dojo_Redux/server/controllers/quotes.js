var mongoose = require('mongoose')
var Quote = mongoose.model('Quote')
module.exports = {
  show: function(req,res){
    Quote.find({}).sort({createdAt: 'desc'}).exec(function(err, quotes){
      if (err) {
        res.json(err)
      }else{
        res.render('quotes', {quotes:quotes})
      }
    });
  },
  create: function(req,res){
    var message = new Quote(req.body)
    console.log(message);
    message.save(function(err){
      if (err) {
        res.json(err)
      }else{
        res.redirect('/quotes')
      }
    })
  }

}
