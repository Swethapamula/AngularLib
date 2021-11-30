const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibraryAngularDB');
const Schema = mongoose.Schema;
  var bookSchema= new Schema({
    bookTitle:String,
    bookAuthor:String,
    genre:String,
    image:String
  })

  var bookData=mongoose.model('book',bookSchema);
  module.exports=bookData;