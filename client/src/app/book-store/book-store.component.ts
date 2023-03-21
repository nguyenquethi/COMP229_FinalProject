import { Component} from '@angular/core';
import {Book} from '../model/book.model';
import { BookRepository } from './../model/book.repository';


@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css']
})
export class BookStoreComponent {
  constructor(private respository: BookRepository) {
  }

  get books(): Book[]{
    return this.respository.getBooks();
  }

  get authors(): string[]{
    return this.respository.getAuthors();
  }
}
