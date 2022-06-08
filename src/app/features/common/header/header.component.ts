import {Component, OnInit} from '@angular/core';
import {HeaderButtonsConstants} from "../../../constants/header-buttons.constants";
import {AuthService} from "../../../services/auth.service";
import {Route} from "../../../constants/route.constants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public buttons = HeaderButtonsConstants.buttons
  public active = "nav__menu";
  public icon = "menu";
  public Route = Route;

  constructor(public authService: AuthService) {
  }

  public navToggle = () => {
    if (this.active === 'nav__menu') {
      this.active = "nav__menu nav__active";
    } else {
      this.active = "nav__menu";
    }

    if (this.icon === "menu") {
      this.icon = "close";
    } else {
      this.icon = "menu";
    }
  }
}
