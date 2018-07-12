import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksViewComponent } from './components/views/books-view/books-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },

  {
    path: 'books',
    component: BooksViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
