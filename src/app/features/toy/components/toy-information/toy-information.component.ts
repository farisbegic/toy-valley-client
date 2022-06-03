import {Component, Input, OnInit} from '@angular/core';
import {ToyDetail} from "../../../../models/toy-detail";

@Component({
  selector: 'app-toy-information',
  templateUrl: './toy-information.component.html',
  styleUrls: ['./toy-information.component.scss', '../../../../../styles.scss']
})
export class ToyInformationComponent implements OnInit {
  @Input() toy: ToyDetail | undefined;
  image: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
