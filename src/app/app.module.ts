import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

// import { alltasks, changetask } from './tasks/store/index';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
 //   RouterModule.forRoot(ROUTES)
   // StoreModule.provideStore({ alltasks, changetask })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
