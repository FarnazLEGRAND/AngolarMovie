import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './entities';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // update(movie: Movie) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private http:HttpClient) { }

  fetchAll() {
    return this.http.get<Movie[]>('http://localhost:8000/api/movie');
  }

  add(movie:Movie) {
    return this.http.post<Movie>('http://localhost:8000/api/movie', movie);
  }
// on contaner id ou bien ecrire '/{$id}' ou '/'+id
  delete(id:number) {
    return this.http.delete<void>('http://localhost:8000/api/movie/'+id);

  }
// byid melange fetchAll+delete
  fetchOne(id:any) {
    return this.http.get<Movie>('http://localhost:8000/api/movie/'+id);
  }


  update(movie:Movie) {
    return this.http.patch<Movie>('http://localhost:8000/api/movie/'+movie.id, movie);
  }
}