import {Component} from '@angular/core';
import {ChipsModel} from "../../../../models/chips.model";
import {ItemsModel} from "../../../../models/items.model";

@Component({
  selector: 'app-top-categories',
  templateUrl: './top-categories.component.html',
  styleUrls: ['./top-categories.component.scss', '../../../../../styles.scss']
})
export class TopCategoriesComponent {
  public chips: Array<ChipsModel> = new Array<ChipsModel>(
    {
      name: "CARS",
      url: "/"
    },
    {
      name: "DOLLS",
      url: "/"
    },
    {
      name: "SOLDIERS",
      url: "/"
    },
    {
      name: "CARDS",
      url: "/"
    },
    {
      name: "VIEW MORE",
      url: "/"
    },
  );

  public items: Array<ItemsModel> = [
    {
      title: "Lorem Ipsum",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
  ]
}
