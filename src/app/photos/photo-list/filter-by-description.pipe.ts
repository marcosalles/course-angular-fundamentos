import { Pipe, PipeTransform } from '@angular/core';

import { Photo } from '../photo/photo';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform {

  transform(photos: Photo[], query: string) {
    query = query.trim().toLowerCase();
    console.log('query', query);
    photos.forEach(photo => console.log(photo));
    console.log('photos', photos);
    if (query) {
      return photos.filter(photo =>
        photo.description.toLowerCase().includes(query)
      );
    } else {
      return photos;
    }
  }
}