import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Photo[]> {
  constructor(private service: PhotoService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Photo[]> {
    return this.service.listFromUserForPage(route.params.userName, 1);
  }
}