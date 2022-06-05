import { Component, OnInit } from '@angular/core';
import {DashboardCategoriesConstants} from "../../../../constants/dashboard-categories.constants";

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {

  public elements = DashboardCategoriesConstants.elements;

  constructor() { }

  ngOnInit(): void {
  }

}
