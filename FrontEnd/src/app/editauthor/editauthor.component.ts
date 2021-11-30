import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';
 import { Router } from '@angular/router';
 import { author } from './author.model';

@Component({
  selector: 'app-editauthor',
  templateUrl: './editauthor.component.html',
  styleUrls: ['./editauthor.component.css']
})
export class EditauthorComponent implements OnInit {
 title="Edit Author";
 
 authorName:string="";
 famousBook:string="";
 nationality:string="";
 image:string="";
 name="";

constructor( public authorService:AuthorsService, public router:Router) { }
authorDetails=new author(this.authorName,this.famousBook,this.nationality,this.image);
  ngOnInit(): void {
    let id= localStorage.getItem("editauthorid");
    this.authorService.getAuthor(id).subscribe(data=>{
      this.authorDetails=JSON.parse(JSON.stringify(data));
      console.log(this.authorDetails);
    })
  }
  editAuthor()
  {

  }

}
