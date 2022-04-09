import {Component, Input} from '@angular/core';
import {ChipsModel} from "../../../../models/chips.model";

@Component({
  selector: 'app-top-chips',
  templateUrl: './top-chips.component.html',
  styleUrls: ['./top-chips.component.scss']
})
export class TopChipsComponent {
  @Input() title: string = '';
  @Input() chips: Array<ChipsModel> = new Array<ChipsModel>();
}
