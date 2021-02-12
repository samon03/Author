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
  favoriteObject = null;


  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.favoriteObject = this.fav;
  }

  // loadFavAuthors() {
  //   this.favoriteService.getFavorite().subscribe();
  // }

  onDelete(_id: any) {
    this.favoriteService.deleteFavorite(_id).subscribe(fav => {
      location.reload(true);
    });
  }

}
