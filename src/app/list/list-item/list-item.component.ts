import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';
import { AuthorService } from 'src/app/services/author.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {


  authorList: Author[];

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors() {
     this.authorService.getAuthors().subscribe(
      author => {
        this.authorList = author;
        // console.log(this.authorList);

      }
     );
  }
}
