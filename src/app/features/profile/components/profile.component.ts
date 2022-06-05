import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user.model";
import {Route} from "../../../constants/route.constants";
import {Router} from "@angular/router";
import {ToyDetail} from "../../../models/toy-detail";
import {ItemsModel} from "../../../models/items.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input()
  user: User | undefined;

  @Input()
  toys: ItemsModel[] | undefined;

  //public image: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  public route = Route;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  public edit(): void {
    this.router.navigate([Route.USERS + Route.SEPARATOR + this.user?.id + Route.SEPARATOR + Route.EDIT]);
  }

  public add(): void {
    this.router.navigate([Route.USERS + Route.SEPARATOR + this.user?.id + Route.SEPARATOR + Route.EDIT]);
  }
}
