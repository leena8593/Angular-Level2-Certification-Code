import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {SerachFilterPipe}  from '../../pipe/serach-filter.pipe';
import {DurationFilterPipe} from '../../pipe/duration-filter.pipe';

import { MovieServiceService } from '../../services/movie-service.service';

export interface IMovieData {
  id: number;
  title: string;
  duration: number;
  budget: number;
  release_date: string;
  box_office:number;
  cinematographers:string;
  poster:string;
  producers:string;
  summary:string;
}

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,SerachFilterPipe,DurationFilterPipe],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {

  
  searchByTitle:string='';
  searchByReleaseYear:string='';
  movieDetails:IMovieData[]=[];
  hostname:string='';

  constructor(private movieService: MovieServiceService) {}
 
  ngOnInit(): void {
    this.getAllMovieDetails();
    this.hostname = window.location.host;
    console.log(this.hostname);
 }


  getAllMovieDetails(): void {
    this.movieService.getAll().subscribe({
      next: (data) => {
        this.movieDetails = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });


  }

  


  

 }
