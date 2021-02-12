import { Component, OnInit } from '@angular/core';
import { Favorite } from 'src/app/models/favorite';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-favorite-author',
  templateUrl: './favorite-author.component.html',
  styleUrls: ['./favorite-author.component.scss']
})
export class FavoriteAuthorComponent implements OnInit {

  favList: Favorite[];

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.loadFavAuthors();
  }


  loadFavAuthors() {
    this.favoriteService.getFavorite().subscribe(
     fav => {
       this.favList = fav;
     }
    );
  }

}
