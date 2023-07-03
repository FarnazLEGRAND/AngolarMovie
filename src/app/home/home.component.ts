import { Component, OnInit } from '@angular/core';
import { Movie } from '../entities';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list:Movie[] = [];

  constructor(private service:MovieService){}

  ngOnInit(): void {
    this.service.fetchAll()
    .subscribe(data => this.list = data);
    
  }
}