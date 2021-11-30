import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
 title="EditBook";
  bookDetail={
    bookTitle:"",
    bookAuthor:"",
    genre:"",
    image:""
    }


  author=""
  constructor( public bookService:BooksService) { }

  ngOnInit(): void {
     this.author="Swetha";
    let book_id=localStorage.getItem("bookId");
    this.bookService.getBookbyID(book_id)
    .subscribe(data=>
    {
     console.log(data);
     this.bookDetail= JSON.parse(JSON.stringify(data));
     console.log(this.bookDetail);
      console.log(this.bookDetail.genre);
    })

  }

  EditBook()
  {

  }

}
