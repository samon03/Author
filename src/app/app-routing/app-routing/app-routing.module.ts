import { NgModule } from '@angular/core';
import { ListItemComponent } from 'src/app/list/list-item/list-item.component';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteAuthorComponent } from 'src/app/list/favorite-author/favorite-author.component';

const routes: Routes = [
  { path: 'author', component: ListItemComponent },
  { path: 'favorite', component:  FavoriteAuthorComponent},
  { path: 'favorite/:_id', component: FavoriteAuthorComponent },
  { path: '', component: ListItemComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
