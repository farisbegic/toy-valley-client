import {Component, OnInit} from '@angular/core';
import {HeaderButtonsConstants} from "../../../constants/header-buttons.constants";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public buttons = HeaderButtonsConstants.buttons
  public admin: string = '';
  public jwt: string = '';
  public userId: string = '';
  public active = "nav__menu";
  public icon = "menu";

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

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.watchStorage().subscribe(data => {
      this.jwt = data.token;
      this.userId = data.userId;
      this.admin = data.admin;
    })
  }

  public logout(): void {
    this.jwt = '';
    this.userId = '';
    this.admin = '';
  }
}
