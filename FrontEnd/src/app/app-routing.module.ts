import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAuthorsComponent } from './add-authors/add-authors.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { BooksListComponent } from './books-list/books-list.component';
import { EditauthorComponent } from './editauthor/editauthor.component';
import { EditbookComponent } from './editbook/editbook.component';

const routes: Routes = [
  {
    path:'books-list',component:BooksListComponent
  },
  {
    path:'authors-list',component:AuthorsListComponent
  },
  {
    path:'addbooks',component:AddbooksComponent
  },
  {
    path:'addauthors',component:AddAuthorsComponent
  },
  {
    path:'editAuthor',component:EditauthorComponent
  },
  {
    path:'editBook',component:EditbookComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
