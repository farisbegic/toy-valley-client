import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ItemsModel} from "../../../../models/items.model";
import {ResolverResponse} from "../../../../constants/resolver-response.constants";

@Component({
  selector: 'app-toys-view-container',
  templateUrl: './toys-view-container.component.html'
})
export class ToysViewContainerComponent implements OnInit {

  public toys: ItemsModel[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.toys = response[ResolverResponse.TOYS];
    })
  }

}
