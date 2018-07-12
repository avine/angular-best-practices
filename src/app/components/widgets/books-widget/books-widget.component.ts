import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Book } from '../../../services/book.model';

@Component({
  selector: 'nbp-books-widget',
  templateUrl: './books-widget.component.html',
  styleUrls: ['./books-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksWidgetComponent implements OnInit {
  @Input() books: Book[];

  constructor() { }

  ngOnInit() {
  }

  getBookId(index: number, book: Book) {
    return book.id;
  }
}
