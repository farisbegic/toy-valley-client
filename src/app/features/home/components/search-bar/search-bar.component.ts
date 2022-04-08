import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss', '../../../../../styles.scss']
})
export class SearchBarComponent {
  @Input() value: string = '';
  @Output() clear: EventEmitter<string> = new EventEmitter<string>();
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onClear() {
    this.clear.emit('');
  }

  onSearch() {
    this.search.emit();
  }
}
