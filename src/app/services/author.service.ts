import { Injectable } from '@angular/core';
import { Author } from '../models/author';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  take: number = 5;
  skip: number = 0;
  baseUrl = `https://api.quotable.io/authors?limit=${this.take}&skip=${this.skip}`;

  constructor(
    private http: HttpClient) { }

  // getAuthors(): Observable<Author[]> {
  //   return this.http.get<Author[]>(this.baseUrl);
  // }

  getAuthors(take: number, skip: number): Observable<Response[]> {
    debugger;
    this.take = take;
    this.skip = skip;
    return this.http.get<Response[]>(`https://api.quotable.io/authors?limit=${this.take}&skip=${this.skip}`);
  }

}
