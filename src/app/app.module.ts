import { CreateComponent } from './tasks/components/create/create.component';
import { HomeComponent } from './tasks/components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import { ROUTES } from './app.routes';
import { DeleteComponent } from './tasks/components/delete/delete.component';
import { UpdateComponent } from './tasks/components/update/update.component';
import { TaskDetailComponent } from './tasks/containers/task/task-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeleteComponent,
    UpdateComponent,
    CreateComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    // StoreModule.provideStore({ alltasks, changetask })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
