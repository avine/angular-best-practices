import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { Book } from '../../../services/book.model';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'nbp-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.scss']
})
export class BooksViewComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books$ = this.bookService.getAll();
  }
}
