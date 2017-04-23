import { ChangeComponent } from './../container/change/change.component';
import { Routes } from '@angular/router';
import { ItemsComponent } from '../components/items/items.component';


export const ROUTES: Routes =
  [
    { path: '', component: ItemsComponent },
    { path: 'items', component: ItemsComponent },
    { path: 'add', component: ChangeComponent },
    { path: 'edit', component: ChangeComponent },
    { path: '*', component: ItemsComponent }
  ];

