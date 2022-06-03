import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TopTraders} from "../../../../models/top-traders.model";
import {ResolverResponse} from "../../../../constants/resolver-response.constants";

@Component({
  selector: 'app-top-traders-container',
  templateUrl: './top-traders-container.component.html'
})

export class TopTradersContainerComponent implements OnInit{

  public topTraders: TopTraders[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.topTraders = response[ResolverResponse.TOP_TRADERS];
    })
  }

}
