import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

const PAGE_SIZE = 12;
@Component({
  selector: 'pic-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private route: ActivatedRoute,
    private service: PhotoService
  ) { }

  ngOnInit(): void {
    this.photos = this.route.snapshot.data.photos;
    this.userName = this.route.snapshot.params.userName;
  }

  load(): void {
    this.service
      .listFromUserForPage(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.filter = '';
        this.photos = this.photos.concat(photos);
        this.hasMore = photos.length >= PAGE_SIZE;
      });
  }
}
