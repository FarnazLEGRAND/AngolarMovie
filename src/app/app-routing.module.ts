import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParametrizedExampleComponent } from './parametrized-example/parametrized-example.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'parametrized/:truc', component: ParametrizedExampleComponent},
  {path: ' movie/:id', component: SingleMovieComponent}
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }