import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { FormMovieComponent } from './form-movie/form-movie.component';
import { ParametrizedExampleComponent } from './parametrized-example/parametrized-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieItemComponent,
    FormMovieComponent,
    ParametrizedExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }