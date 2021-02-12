import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';
import { Response } from 'src/app/models/response';
import { AuthorService } from 'src/app/services/author.service';
import { map } from 'rxjs/operators'
import { pipe } from 'rxjs';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  currentPage: number = 1;
  take: number = 5;
  const = 0;

  respList: Response[];

  authorList: Author[] = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors() {
     this.authorService.getAuthors(this.take, this.const * this.take).subscribe(
      response => {

        let test = response;
        let tempList = response["results"];
        tempList.map(x => {
          this.authorList.push({
            _id: x._id,
            bio : x.bio,
            link : x.link,
            name: x.name,
            quoteCount: x.quoteCount

          });
        })

        console.log(this.authorList[0]);

      },
      err => {

        let test = err;
      }
     );
  }

  prev()
  {
    this.authorList = [];
    this.const -= 1;
    this.currentPage -= 1;
    this.loadAuthors();
  }

  next(){
    this.authorList = [];
    this.const += 1;
    this.currentPage += 1;
    this.loadAuthors();
    console.log(this.authorList);

  }
}
