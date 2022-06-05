import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from "../../../../models/category.model";
import {CategoryProperty} from "../../../../models/enums/category-property.enum";
import {Route} from "../../../../constants/route.constants";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  @Output() removeCategory: EventEmitter<Category> = new EventEmitter<Category>()

  @Input() categories: Category[] = [];
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() description: string = '';

  image: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  public fullUrl: string = Route.TOYS + Route.SEPARATOR + Route.CATEGORY + Route.SEPARATOR;
  public categoryProperty = CategoryProperty;
  public route = Route;
  public removeAllowed: boolean = false;


    public toggleAllowRemove(): void {
    this.removeAllowed = !this.removeAllowed;
  }

  public remove(category: Category): void {
    this.removeCategory.emit(category);
  }
}
