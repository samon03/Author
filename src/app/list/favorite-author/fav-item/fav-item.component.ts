import { FavoriteService } from './../../../services/favorite.service';
import { Component, Input, OnInit } from '@angular/core';
import { Favorite } from 'src/app/models/favorite';

@Component({
  selector: 'app-fav-item',
  templateUrl: './fav-item.component.html',
  styleUrls: ['./fav-item.component.scss']
})
export class FavItemComponent implements OnInit {

  @Input() fav: Favorite;

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favoriteService.getFavorite().subscribe();
  }

}
