import { Component, Input } from '@angular/core';

@Component({
  selector: 'pic-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string = '';
}
