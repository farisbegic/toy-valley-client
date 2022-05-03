import { Component, OnInit } from '@angular/core';
import {User} from "../../../../models/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../../services/user.service";
import {Route} from "../../../../constants/route.constants";
import {City} from "../../../../models/city.model";
import {CityService} from "../../../../services/city.service";
import {ResolverResponse} from "../../../../constants/resolver-response.constants";

@Component({
  selector: 'app-registration-container',
  templateUrl: './registration-container.component.html',
})
export class RegistrationContainerComponent implements OnInit {

  public cities: City[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.cities = response[ResolverResponse.CITIES];
    });
  }

  /*saveUser(user: User): void {
    this.userService.create(user).subscribe(value => {
      this.router.navigate([this.route.EMPTY]);
    });
  }*/
}
