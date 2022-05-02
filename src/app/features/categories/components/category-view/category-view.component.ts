import {Component, Input} from '@angular/core';
import {Route} from "../../../../constants/route.constants";
import {CategoryProperty} from "../../../../models/enums/category-property.enum";
import {CategoryNameMapping} from "../../../../models/enums/category-name.enum";
import {Category} from "../../../../models/category.model";


@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent {

  @Input()
  public category!: Category;

  public categoryProperty = CategoryProperty;
  public route = Route;

  getCategoryName(category: Category) {
    return CategoryNameMapping[category[CategoryProperty.name]];
  }

}
