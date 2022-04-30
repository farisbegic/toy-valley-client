import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Category} from "../models/category.model";
import {ResolverResponse} from "../constants/resolver-response.constants";

@Component({
  selector: 'app-category-view-container',
  templateUrl: './category-view-container.component.html',
})
export class CategoryViewContainerComponent implements OnInit{

  public category: Category | undefined;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.category = response[ResolverResponse.CATEGORY];
    });
  }

}
