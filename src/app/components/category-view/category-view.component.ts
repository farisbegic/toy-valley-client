import {Component, Input} from '@angular/core';
import {Category} from "../../models/category.model";
import {Route} from "../../constants/route.constants";
import {CategoryProperty} from "../../models/category-property.enum";
import {CategoryNameMapping} from "../../models/category-name.enum";


@Component({
  selector: 'app-item-view',
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
