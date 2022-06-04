import { Component, OnInit } from '@angular/core';
import {ItemsModel} from "../../../../models/items.model";
import {ActivatedRoute} from "@angular/router";
import {ResolverResponse} from "../../../../constants/resolver-response.constants";
import {ToyDetail} from "../../../../models/toy-detail";

@Component({
  selector: 'app-toy-container',
  templateUrl: './toy-container.component.html'
})
export class ToyContainerComponent implements OnInit {

  public toy: ToyDetail | undefined;
  public visitorToys: ItemsModel[] | undefined

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.toy = response[ResolverResponse.TOY];
      this.visitorToys = response[ResolverResponse.USER + ResolverResponse.SEPARATOR + ResolverResponse.TOY];
    })
  }

}
