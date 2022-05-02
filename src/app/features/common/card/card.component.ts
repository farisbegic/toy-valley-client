import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  image: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
}
