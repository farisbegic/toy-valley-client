import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from "../../models/category.model";
import {CategoryProperty} from "../../models/category-property.enum";
import {Route} from "../../constants/route.constants";
import {CategoryNameMapping} from "../../models/category-name.enum";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  @Input()
  categories: Category[] = [];

  @Output()
  removeCategory: EventEmitter<Category> = new EventEmitter<Category>()

  public categoryProperty = CategoryProperty;
  public route = Route;

  public removeAllowed: boolean = false;

  public toggleAllowRemove(): void {
    this.removeAllowed = !this.removeAllowed;
  }

  public remove(category: Category): void {
    this.removeCategory.emit(category);
  }

  getCategoryName(category: Category) {
    return CategoryNameMapping[category[CategoryProperty.name]];
  }

}
