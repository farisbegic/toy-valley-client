import {Component} from '@angular/core';

@Component({
  selector: 'app-search-bar-container',
  templateUrl: './search-bar-container.component.html'
})
export class SearchBarContainerComponent {
  value: string = '';

  search(value: string) {
    this.value = value;
    // Function should make an api call using the value from the form (this.value)
  }

  clear() {
    this.value = ''
  }
}
