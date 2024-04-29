
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovieData } from '../components/movie-info/movie-info.component';


@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<IMovieData[]> {
    return this.http.get<IMovieData[]>('movies');
  }


  getMovieById(id: String): Observable<IMovieData>  {
    return this.http.get<IMovieData>('movies/'+id);
  }
  
}


