import { Component, OnInit } from '@angular/core';
import {City} from "../../../models/city.model";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {ResolverResponse} from "../../../constants/resolver-response.constants";
import {User} from "../../../models/user.model";
import {Route} from "../../../constants/route.constants";

@Component({
  selector: 'app-edit-profile-container',
  templateUrl: './edit-profile-container.component.html',
})
export class EditProfileContainerComponent implements OnInit {

  public cities: City[] | undefined;
  public user: User | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.cities = response[ResolverResponse.CITIES];
    });

    this.activatedRoute.data.subscribe((response: any) => {
      this.user = response[ResolverResponse.USER];
    });
  }

  updateUser(user: User): void {
    this.userService.update(user, this.user?.id).subscribe(value => {
      //this.router.navigate([Route.EMPTY]);
    });
  }

}
