import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';
import { ApiService } from '../../core/api/api.service';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  constructor(
    private http: HttpClient,
    private api: ApiService
  ) { }

  listFromUser(userName: string) {
    return this.http.get<Photo[]>(this.api.GET.userFeed(userName));
  }

  listFromUserForPage(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString());
    return this.http
      .get<Photo[]>(
        this.api.GET.userFeed(userName),
        { params: params }
      );
  }
}