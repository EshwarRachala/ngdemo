import 'zone.js/dist/zone';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './container/app.component';
import { Items } from './components/items/items.component';
import { ItemsList } from './components/items-list/items-list.component';
import { ItemDetail } from './components/item-detail/item-detail.component';


import { ROUTES } from './routes/app.routes';
import { items } from './stores/items.store';
import { selectedItem } from './stores/selectedItem.store';



@NgModule({
  declarations: [
    AppComponent,
    Items,
    ItemDetail,
    ItemsList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.provideStore({ items, selectedItem }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
