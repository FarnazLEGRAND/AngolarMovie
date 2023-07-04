import { Component, OnInit } from '@angular/core';
import { Movie } from '../entities';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {
  movie:Movie;
  constructor(private route:ActivatedRoute, private service:MovieService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => 
      this.service.fetchOne(params['id']).subscribe(data => this.movie = data)
    );
  }
}