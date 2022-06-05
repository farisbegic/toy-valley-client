import { Component, OnInit } from '@angular/core';
import {Route} from "../../../../constants/route.constants";
import {Router} from "@angular/router";
import {CityService} from "../../../../services/city.service";

@Component({
  selector: 'app-add-city-container',
  templateUrl: './add-city-container.component.html'
})
export class AddCityContainerComponent implements OnInit {

  constructor(private router: Router, private cityService: CityService) { }

  ngOnInit(): void {
  }

  public saveCity(name: string): void {
    this.cityService.addCity(name).subscribe(() => {
      this.router.navigate([Route.DASHBOARD + Route.SEPARATOR + Route.CITY])
    });
  }

}
