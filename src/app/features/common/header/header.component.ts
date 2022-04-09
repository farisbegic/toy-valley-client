import {Component} from '@angular/core';
import {HeaderButtonsConstants} from "../../../constants/header-buttons.constants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public buttons = HeaderButtonsConstants.buttons
}
