import { Component, Input } from '@angular/core';

@Component({
  selector: 'pic-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {

  @Input() description = 'Photo placeholder';
  @Input() url = 'https://uploads-ssl.webflow.com/57e5747bd0ac813956df4e96/5aebae14c6d254621d81f826_placeholder.png';

}
