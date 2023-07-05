import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './entities';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
  // update(movie: Movie) {
  //   throw new Error('Method not implemented.');
  // }

  fetchAll() {
    return this.http.get<Movie[]>('http://localhost:8000/api/movie')
    //pfff
    // .pipe(map(data => data.map(item => ({...item, released:item.released.substring(0,10)}))));
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

  // search un movie ba loghat khas
  search(term:string) {
    return this.http.get<Movie[]>('http://localhost:8000/api/movie/search/'+term)
  }

}