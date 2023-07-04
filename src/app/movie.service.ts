import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './entities';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  fetchAll() {
    return this.http.get<Movie[]>('http://localhost:8000/api/movie');
  }
  add(movie:Movie){
    return this.http.post<Movie[]>('http://localhost:8000/api/movie',movie);
  }
}