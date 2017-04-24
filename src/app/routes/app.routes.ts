import { Routes } from '@angular/router';
import { ItemsComponent } from '../components/items/items.component';


export const ROUTES: Routes =
  [
    { path: '', component: ItemsComponent },
    { path: 'items', component: ItemsComponent },
    { path: '*', component: ItemsComponent }
  ];

