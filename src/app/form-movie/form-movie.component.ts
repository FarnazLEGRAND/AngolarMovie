import { Component, EventEmitter, Output } from '@angular/core';
import { Movie } from '../entities';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent {
  movie:Movie = {title: '', resume:'', released: '', duration: 0};

  @Output()
  added = new EventEmitter<Movie>();

  
  handleSubmit() {
     this.added.emit(this.movie);
  }

}