import {Component, Input} from '@angular/core';
import { Route } from "../../../constants/route.constants";
import {CategoryProperty} from "../../../models/enums/category-property.enum";


@Component({
  selector: 'app-category-card',
  templateUrl: './category_card.component.html',
  styleUrls: ['./category_card.component.scss']
})
export class CategoryCardComponent {

  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() description: string = '';
  image: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';


  public fullUrl: string = Route.TOYS + Route.SEPARATOR + Route.CATEGORY + Route.SEPARATOR;

}







