import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user.model";
import {ActivatedRoute} from "@angular/router";
import {ResolverResponse} from "../../../constants/resolver-response.constants";
import {ToyDetail} from "../../../models/toy-detail";
import {ItemsModel} from "../../../models/items.model";

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
})
export class ProfileContainerComponent implements OnInit {

  public user: User | undefined;
  public toys: ItemsModel[] | undefined;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.user = response[ResolverResponse.USER];
    });

    this.activatedRoute.data.subscribe((response: any) => {
      this.toys = response[ResolverResponse.USER + ResolverResponse.SEPARATOR + ResolverResponse.TOY];
    });
  }

}
