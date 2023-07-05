import { Component } from '@angular/core';
import { Movie } from '../entities';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  term = '';
  results:Movie[] = [];

  constructor(private service:MovieService){}

  doSearch() {
    if(this.term.length < 2) {
      this.results = [];
    } else{
      this.service.search(this.term).subscribe(data => this.results = data);

    }
  }
}