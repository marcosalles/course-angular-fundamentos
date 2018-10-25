import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'pic-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() query: string = '';
  @Output() onTyping: EventEmitter<string> = new EventEmitter();

  debounce: Subject<string> = new Subject();

  ngOnInit() {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(query => this.onTyping.emit(query));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
