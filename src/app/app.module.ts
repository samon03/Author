import { AppRoutingModule } from './app-routing/app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { FavoriteAuthorComponent } from './list/favorite-author/favorite-author.component';
import { ItemComponent } from './list/list-item/item/item.component';
import { FavItemComponent } from './list/favorite-author/fav-item/fav-item.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListComponent,
    ListItemComponent,
    FavoriteAuthorComponent,
    ItemComponent,
    FavItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
