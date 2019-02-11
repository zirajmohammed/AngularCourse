import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovielistComponent,
    MoviedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
