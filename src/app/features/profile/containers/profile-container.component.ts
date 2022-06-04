import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user.model";
import {ActivatedRoute} from "@angular/router";
import {ResolverResponse} from "../../../constants/resolver-response.constants";

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
})
export class ProfileContainerComponent implements OnInit {

  public user: User | undefined;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.user = response[ResolverResponse.USER];
    });
  }

}
