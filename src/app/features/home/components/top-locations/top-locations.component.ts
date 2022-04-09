import { Component, OnInit } from '@angular/core';
import {ChipsModel} from "../../../../models/chips.model";

@Component({
  selector: 'app-top-locations',
  templateUrl: './top-locations.component.html',
  styleUrls: ['./top-locations.component.scss']
})
export class TopLocationsComponent {
  public chips: Array<ChipsModel> = [
    {
      name: "VISOKO",
      url: "/"
    },
    {
      name: "SARAJEVO",
      url: "/"
    },
    {
      name: "TUZLA",
      url: "/"
    },
    {
      name: "MOSTAR",
      url: "/"
    },
    {
      name: "VIEW MORE",
      url: "/"
    },
  ]

}
