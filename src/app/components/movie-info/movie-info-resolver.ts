import { inject } from '@angular/core';
import type { ResolveFn } from '@angular/router';
import { map } from 'rxjs';
import { MovieServiceService } from '../../services/movie-service.service';
import { IMovieData } from './movie-info.component';




export const movieDetailsResolver: ResolveFn<IMovieData> = (route) => {
  return inject(MovieServiceService)
    .getMovieById(route.params['id'])
    .pipe(
      map((response) => response));
};
