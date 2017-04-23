import { ItemDetailComponent } from '../components/item-detail/item-detail.component';
import { Routes } from '@angular/router';
import { ItemsComponent } from '../components/items/items.component';

export const ROUTES: Routes =
  [
    { path: '', component: ItemsComponent },
    { path: 'items', component: ItemsComponent },
    { path: 'add', component: ItemDetailComponent },
    { path: 'edit', component: ItemDetailComponent },
    { path: 'delete', component: ItemDetailComponent },
    { path: '*', component: ItemsComponent }
  ];

