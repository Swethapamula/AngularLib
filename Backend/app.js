const express= require('express');
const app= new express();
const  cors =require("cors");
const jwt = require("jsonwebtoken");
var port = 3050;
 var authorsData =require("./src/model/authorData");
 var booksData =require("./src/model/bookData");

 app.use(express.json());

app.use(cors());


app.post("/authorinsert", function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST,PATCH,PUT,DELETE,OPTIONS");
    console.log(req.body)
    var author={
        authorName:req.body.author.authorName,
        famousBook:req.body.author.famousBook,
        nationality:req.body.author.nationality,
        image:req.body.author.image
    }
    console.log(author);
    var author=new authorsData(author)
    author.save();
})

app.post("/bookinsert", function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST,PATCH,PUT,DELETE,OPTIONS");
    var book={
        bookTitle:req.body.book.bookTitle,
        bookAuthor:req.body.book.bookAuthor,
        genre:req.body.book.genre,
        image:req.body.book.image
    }
    var book=new booksData(book)
    book.save();
})

app.get('/books',function(req,res){
    
    booksData.find()
                .then(function(books){
                    res.send(books);
                });
});
app.get('/authors', function(req,res){

    authorsData.find()
    .then(function(authors)
    {
        res.send(authors);
    })
})

app.delete('/authordelete/:id',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST,PATCH,PUT,DELETE,OPTIONS");

  let id= req.params.id;
  console.log(id);
    authorsData.findByIdAndRemove({"_id":id})
    .then(()=>
    { console.log("Success");
        res.send()
    })
})

app.delete("/bookdelete/:id", function(req,res){
    console.log("im in delete");
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST,PATCH,PUT,DELETE,OPTIONS");

    let id =req.params.id;
    console.log(id);
    booksData.findByIdAndRemove({"_id":id})
    .then(()=>{
        console.log("Deleted book successsfully");
        res.send();
    })

})

app.get('/author/:id', function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST,PATCH,PUT,DELETE,OPTIONS");
    let id= req.params.id;
    console.log(id);
    authorsData.find({"_id":id})
    .then(function(author){
        console.log(author);
        res.send(author);
    })

})

app.get('/book/:id', function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST,PATCH,PUT,DELETE,OPTIONS");
    let id= req.params.id;
    
    booksData.find({"_id":id})
    .then(function(book){
        console.log(book);
        res.send(book);
    })

})


app.listen(port,()=>
{
console.log("Listning to port:"+port)
});


