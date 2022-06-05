import { Component, OnInit } from '@angular/core';
import {ResolverResponse} from "../../../../constants/resolver-response.constants";
import {ActivatedRoute} from "@angular/router";
import {City} from "../../../../models/city.model";

@Component({
  selector: 'app-dashboard-city-container',
  templateUrl: './dashboard-city-container.component.html'
})
export class DashboardCityContainerComponent implements OnInit {
  public cities: City[] = [];
  public cityAttributes: string[] = ['id', 'name']

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.cities = response[ResolverResponse.CITIES];
    });
  }
}
