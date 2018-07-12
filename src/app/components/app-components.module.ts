import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BooksViewComponent } from './views/books-view/books-view.component';
import { BooksWidgetComponent } from './widgets/books-widget/books-widget.component';

const components = [
  BooksViewComponent,
  BooksWidgetComponent,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ]
})
export class AppComponentsModule { }
