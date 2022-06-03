import { Component, OnInit } from '@angular/core';
import {ChipsModel} from "../../../../models/chips.model";
import {Route} from "../../../../constants/route.constants";

@Component({
  selector: 'app-top-locations',
  templateUrl: './top-locations.component.html',
  styleUrls: ['./top-locations.component.scss']
})
export class TopLocationsComponent {
  public fullUrl: string = Route.TOYS + Route.SEPARATOR + Route.CITY + Route.SEPARATOR;
  public chips: Array<ChipsModel> = [
    {
      name: "VISOKO",
      url: `${this.fullUrl}/1`
    },
    {
      name: "SARAJEVO",
      url: `${this.fullUrl}/2`
    },
    {
      name: "TUZLA",
      url: `${this.fullUrl}/3`
    },
    {
      name: "MOSTAR",
      url: `${this.fullUrl}/4`
    },
    {
      name: "VIEW MORE",
      url: `${this.fullUrl}/5`
    },
  ]

}
