import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() author: Author;

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {

  }

  addFavorite() {
      this.favoriteService.postFavorite(this.author).subscribe(fav => {
        console.log(fav);
      });
  }

}
