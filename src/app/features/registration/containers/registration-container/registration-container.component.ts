import { Component, OnInit } from '@angular/core';
import {User} from "../../../../models/user.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-registration-container',
  templateUrl: './registration-container.component.html',
})
export class RegistrationContainerComponent implements OnInit {

  public user: User | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {

  }

}
