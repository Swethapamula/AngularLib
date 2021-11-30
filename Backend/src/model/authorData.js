const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibraryAngularDB');
const Schema = mongoose.Schema;
  var authorSchema= new Schema({
    authorName:String,
    famousBook:String,
    nationality:String,
    image:String
  })

  var authorData=mongoose.model('author',authorSchema);
  module.exports=authorData;