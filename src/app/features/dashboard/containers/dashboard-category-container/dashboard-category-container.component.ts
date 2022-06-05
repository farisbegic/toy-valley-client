import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ResolverResponse} from "../../../../constants/resolver-response.constants";
import {City} from "../../../../models/city.model";

@Component({
  selector: 'app-dashboard-category-container',
  templateUrl: './dashboard-category-container.component.html'
})
export class DashboardCategoryContainerComponent implements OnInit {

  public categories: City[] = [];
  public categoryAttributes: string[] = ['id', 'name', 'description']

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.categories = response[ResolverResponse.CATEGORIES];
    });
  }

}
