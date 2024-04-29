
import { Routes } from '@angular/router';
//import { detailsResolver } from './features/details/details.resolver';

import { movieDetailsResolver } from './components/movie-info/movie-info-resolver';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/movie-details/movie-details.component').then(
        (m) => m.MovieDetailsComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./components/movie-info/movie-info.component').then(
        (movie) => movie.MovieInfoComponent
      ),
    resolve: {
      matches: movieDetailsResolver,
    },
    
  },
];

