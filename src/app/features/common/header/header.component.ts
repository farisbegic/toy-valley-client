import {Component} from '@angular/core';
import {Route} from "../../../constants/route.constants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public buttons = [
    {
      link: Route.EMPTY,
      text: "Home"
    }
  ]
}
