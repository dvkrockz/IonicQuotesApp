import { IonicPage } from 'ionic-angular';
import { LibraryPage } from './../library/library';
import { FavoritesPage } from './../favorites/favorites';
import { Component } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class Tabs {

favoritesPage = FavoritesPage;
libraryPage = LibraryPage;

}
