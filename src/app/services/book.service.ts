import { ReplaySubject } from 'rxjs';

import { Injectable } from '@angular/core';

import { BOOKS } from './book.mock';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books$ = new ReplaySubject<Book[]>();

  constructor() {
    this.updatePrices();
    setInterval(() => {
      this.updatePrices();
    }, 2000);
  }

  private updatePrices() {
    this.books$.next(
      BOOKS.map(book => ({
        ...book,
        price: Math.round(Math.random() * 10000) / 100,
      }))
    );
  }

  getAll() {
    return this.books$.asObservable();
  }
}
