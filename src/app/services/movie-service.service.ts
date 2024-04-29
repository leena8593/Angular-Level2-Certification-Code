
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { IMovieData } from './model/IMovieData';
//import { IMovieData } from '../../model/IMovieData';

//import { MovieServiceService } from '../../services/movie-service.service';
import { IMovieData } from '../components/movie-info/movie-info.component';

//const baseUrl = 'http://localhost:4200/';

@Injectable({
  providedIn: 'root'
})

export class MovieServiceService {

 // constructor() { }





  constructor(private http: HttpClient) {}

  getAll(): Observable<IMovieData[]> {
    return this.http.get<IMovieData[]>('movies');
  }


  getMovieById(id: String): Observable<IMovieData>  {
    return this.http.get<IMovieData>('movies/'+id);
  }
  
}


