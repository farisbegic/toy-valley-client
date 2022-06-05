import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from "../../../../models/category.model";
import {ResolverResponse} from "../../../../constants/resolver-response.constants";
import {CategoryService} from "../../../../services/category.service";
import {User} from "../../../../models/user.model";
import {Route} from "../../../../constants/route.constants";

@Component({
  selector: 'app-category-list-container',
  templateUrl: './category-list-container.component.html',
})
export class CategoryListContainerComponent implements OnInit {

  public categories: Category[] = [];
  public expanded: boolean = false;



  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.categories = response[ResolverResponse.CATEGORIES];
    });
  }

  removeCategory(category: Category) {
    const index = this.categories.indexOf(category);
    if (index > -1) {
      this.categories.splice(index, 1);
    }
  }

  isExpanded(): void {
    this.expanded = !this.expanded;
  }

}
