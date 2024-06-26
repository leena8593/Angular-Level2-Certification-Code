import { Pipe, PipeTransform } from '@angular/core';
import { IMovieData } from '../components/movie-info/movie-info.component';

@Pipe({
  name: 'serachFilter',
  standalone: true
})
export class SerachFilterPipe implements PipeTransform {
  transform(value: IMovieData[], args1: string,args2: string): IMovieData[] {
    if (!value) return value;
   if (!args1 && !args2) return value;

    let movieName = args1;
    let releaseDate = args2;

    return value.filter((item: IMovieData) => {
      return JSON.stringify(item.title).toLowerCase().includes(movieName.toLowerCase()) 
      && JSON.stringify(item.release_date.substring(0,4)).toLowerCase().includes(releaseDate);
    })
  }

}
