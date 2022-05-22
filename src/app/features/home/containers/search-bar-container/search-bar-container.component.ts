import {Component} from '@angular/core';
import {ToysService} from "../../../../services/toys.service";
import {SearchItemsModel} from "../../../../models/search-items.model";
import {debounce, interval, Subscription} from "rxjs";

@Component({
  selector: 'app-search-bar-container',
  templateUrl: './search-bar-container.component.html'
})
export class SearchBarContainerComponent {
  value: string = '';
  searchList: SearchItemsModel[] = [];

  constructor(private toyService: ToysService) {
  }

  search(value: string) {
    this.value = value;
    setTimeout(() => {
      if (this.value !== '') {
        this.toyService.getItemsByName(this.value)
          .subscribe((data: any) => this.searchList = data);
      } else {
        this.searchList = [];
      }
    }, 2000);
  }

  clear() {
    this.value = ''
  }
}
