import { inject } from '@angular/core';
import type { ResolveFn } from '@angular/router';
import { map } from 'rxjs';
import { MovieService} from '../../services/movie-service';
import { IMovieData } from './movie-info.component';

export const movieDetailsResolver: ResolveFn<IMovieData> = (route) => {
  return inject(MovieService)
    .getMovieById(route.params['id'])
    .pipe(
      map((response) => response));
};
