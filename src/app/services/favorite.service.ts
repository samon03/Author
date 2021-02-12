import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorite } from '../models/favorite';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  favUrl = "http://localhost:3000/favorite";

  constructor(private http: HttpClient) { }


  getFavorite(): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(this.favUrl);
  }

  postFavorite(favorite: Favorite): Observable<Favorite[]> {
    return this.http.post<Favorite[]>(this.favUrl, favorite);
  }
}
