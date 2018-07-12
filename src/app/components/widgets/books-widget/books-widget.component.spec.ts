import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksWidgetComponent } from './books-widget.component';

describe('BooksWidgetComponent', () => {
  let component: BooksWidgetComponent;
  let fixture: ComponentFixture<BooksWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
