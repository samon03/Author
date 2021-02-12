import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';
import { AuthorService } from 'src/app/services/author.service';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() author: Author;

  wish: boolean;

  constructor(private favoriteService: FavoriteService, private authorService: AuthorService) { }

  ngOnInit(): void {

  }

  addFavorite() {
    this.favoriteService.postFavorite(this.author).subscribe(fav => {
      this.wish = true;
    });
  }

  removeFavorite(_id: string) {
      this.favoriteService.deleteFavorite(_id).subscribe(fav => {
        this.wish = false;
      });

      this.authorService.deleteFavorite(_id).subscribe(fav => {
        this.wish = false;
      })

  }

}
