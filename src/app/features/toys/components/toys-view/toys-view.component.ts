import {Component, Input, OnInit} from '@angular/core';
import {ItemsModel} from "../../../../models/items.model";

@Component({
  selector: 'app-toys-view',
  templateUrl: './toys-view.component.html',
  styleUrls: ['./toys-view.component.scss', '../../../../../styles.scss']
})
export class ToysViewComponent implements OnInit {
  @Input() toys: ItemsModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getShortenedText(description: string) : string {
    const length = 50;
    let text = description.substring(0, length);
    if (text.length === length) {
      text += '...';
    }
    return text;
  }
}
