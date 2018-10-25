import { Component, Input } from '@angular/core';

import { Photo } from './photo';
import { ApiService } from '../../core/api/api.service';

@Component({
  selector: 'pic-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  private _photo: Photo;

  @Input() set photo(photo: Photo) {
    if (!/data:/.test(photo.url)) {
      photo.url = this.api.GET.photo(photo.url);
    }
    this._photo = photo;
  }

  get photo() {
    return this._photo;
  }

  constructor(private api: ApiService){}
}
