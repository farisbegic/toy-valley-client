import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Route} from "../../../../constants/route.constants";
import {CategoryService} from "../../../../services/category.service";
import {CreateCategoryModel} from "../../../../models/create-category.model";

@Component({
  selector: 'app-add-category-container',
  templateUrl: './add-category-container.component.html'
})
export class AddCategoryContainerComponent implements OnInit {

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  public saveCategory(categoryModel: CreateCategoryModel): void {
    this.categoryService.addCategory(categoryModel).subscribe(() => {
      this.router.navigate([Route.DASHBOARD + Route.SEPARATOR + Route.CATEGORY])
    });
  }

}
