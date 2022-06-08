import {Component, OnInit} from '@angular/core';
import {DashboardCategoriesConstants} from "../../../../constants/dashboard-categories.constants";

@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.scss']
})
export class DashboardOverviewComponent implements OnInit {

  public elements = DashboardCategoriesConstants.elements;

  constructor() { }

  ngOnInit(): void {
  }

}
