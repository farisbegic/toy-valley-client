import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user.model";
import {ActivatedRoute} from "@angular/router";
import {ResolverResponse} from "../../../constants/resolver-response.constants";
import {ItemsModel} from "../../../models/items.model";
import {ExchangeRequestsModel} from "../../../models/exchange-requests.model";

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
})
export class ProfileContainerComponent implements OnInit {

  public user: User | undefined;
  public toys: ItemsModel[] | undefined;
  public requests: ExchangeRequestsModel[] | undefined;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.user = response[ResolverResponse.USER];
    });

    this.activatedRoute.data.subscribe((response: any) => {
      this.toys = response[ResolverResponse.USER + ResolverResponse.SEPARATOR + ResolverResponse.TOY];
    });

    this.activatedRoute.data.subscribe((response: any) => {
      this.requests = response[ResolverResponse.REQUEST];
    });
  }

}
