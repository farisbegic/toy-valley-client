import {Component, Input} from '@angular/core';
import {Route} from "../../../constants/route.constants";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  url: string = Route.TOY
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() description: string = '';
  image: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';



}
