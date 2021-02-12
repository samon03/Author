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

  authorUrl = "https://api.quotable.io/authors/";

  constructor(
    private http: HttpClient) { }

  getAuthors(take: number, skip: number): Observable<Response[]> {
    this.take = take;
    this.skip = skip;
    return this.http.get<Response[]>(`https://api.quotable.io/authors?limit=${this.take}&skip=${this.skip}`);
  }

  deleteFavorite(_id: string): Observable<Author[]>{
    return this.http.delete<Author[]>(`https://api.quotable.io/authors/${_id}`);
  }

}
