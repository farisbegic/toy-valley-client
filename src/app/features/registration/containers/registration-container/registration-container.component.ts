import { Component, OnInit } from '@angular/core';
import {User} from "../../../../models/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../../services/user.service";
import {Route} from "../../../../constants/route.constants";

@Component({
  selector: 'app-registration-container',
  templateUrl: './registration-container.component.html',
})
export class RegistrationContainerComponent implements OnInit {

  public user: User | undefined;
  public route = Route;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) {}

  ngOnInit(): void {}

  saveUser(user: User): void {
    this.userService.create(user).subscribe(value => {
      this.router.navigate([this.route.EMPTY]);
    });
  }

}
