
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {DurationFilterPipe} from '../../pipe/duration-filter.pipe';




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
  selector: 'app-movie-info',
  standalone: true,
  imports: [CommonModule,RouterModule,DurationFilterPipe],

  templateUrl: './movie-info.component.html',
  styleUrl: './movie-info.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieInfoComponent implements OnInit{
  private route = inject(ActivatedRoute);

  movieData: IMovieData;

  constructor() {
    this.movieData = { id: 0,
      title: '',
      duration: 0,
      budget: 0,
      release_date: '',
      box_office:0,
      cinematographers:'',
      poster:'',
      producers:'',
      summary:''
    } ;
    }

  ngOnInit(): void {
    this.movieData = this.route.snapshot.data['matches'] as IMovieData;
  }
  
  
}