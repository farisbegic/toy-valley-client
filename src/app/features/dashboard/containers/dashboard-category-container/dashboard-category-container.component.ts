import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ResolverResponse} from "../../../../constants/resolver-response.constants";
import {City} from "../../../../models/city.model";
import {CategoryService} from "../../../../services/category.service";

@Component({
  selector: 'app-dashboard-category-container',
  templateUrl: './dashboard-category-container.component.html'
})
export class DashboardCategoryContainerComponent implements OnInit {

  public categories: City[] = [];
  public categoryAttributes: string[] = ['id', 'name', 'description']

  constructor(private activatedRoute: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.categories = response[ResolverResponse.CATEGORIES];
    });
  }

  public deleteCategories(category: number): void {
    this.categoryService.removeCategory(category).subscribe(() => {
      this.categoryService.getCategories().subscribe(response => {
        this.categories = response;
      })
    })
  }

}
