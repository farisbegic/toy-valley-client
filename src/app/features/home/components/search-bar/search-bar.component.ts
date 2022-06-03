import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SearchItemsModel} from "../../../../models/search-items.model";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss', '../../../../../styles.scss']
})
export class SearchBarComponent {
  @Input() value: string = '';
  @Input() searchList: SearchItemsModel[] = [];
  @Output() clear: EventEmitter<string> = new EventEmitter<string>();
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onClear() {
    this.clear.emit('');
    this.searchList = []
  }

  onSearch() {
    this.search.emit(this.value);
  }
}
