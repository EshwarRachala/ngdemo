import { Routes, RouterModule } from '@angular/router';
import { DeleteComponent } from './tasks/components/delete/delete.component';
import { HomeComponent } from './tasks/components/home/home.component';
import { CreateComponent } from './tasks/components//create/create.component';
import { UpdateComponent } from './tasks/components/update/update.component';

export const ROUTES: Routes =
  [{
    path: '',
    component: HomeComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'update',
    component: UpdateComponent
  },
  {
    path: 'delete',
    component: DeleteComponent
  }];

