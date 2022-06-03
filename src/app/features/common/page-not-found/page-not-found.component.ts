import { Component, OnInit } from '@angular/core';
import {Route} from "../../../constants/route.constants";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  public homeRoute = Route.EMPTY;

}
