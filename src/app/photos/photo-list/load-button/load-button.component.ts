import { Component, Input } from '@angular/core';

@Component({
  selector: 'pic-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent {
  @Input() hasMore: boolean = false;
}
