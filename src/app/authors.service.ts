import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAuthors() {
    return ["Charles Dickens", "J.K. Rowling", "Samantha Chambers", "Lee Childs"]
  }
}
