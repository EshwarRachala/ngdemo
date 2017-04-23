import { Routes } from '@angular/router';
import { Items } from '../components/items/items.component';

export const ROUTES: Routes =
  [
    { path: '', component: Items },
    { path: 'items', component: Items },
    { path: '*', component: Items }
  ];

