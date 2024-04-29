import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationFilter',
  standalone: true
})
export class DurationFilterPipe implements PipeTransform {
  
  transform(value: number): string {
    if (!value) return '';
   

    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}min` : ''}`;
  }

  }


  


