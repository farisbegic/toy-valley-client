import {Component, Input, OnInit} from '@angular/core';
import {ToyDetail} from "../../../../models/toy-detail";
import {User} from "../../../../models/user.model";

@Component({
  selector: 'app-trader-information',
  templateUrl: './trader-information.component.html',
  styleUrls: ['./trader-information.component.scss', '../../../../../styles.scss']
})
export class TraderInformationComponent implements OnInit {
  @Input() user: User | undefined;
  @Input() preferences: string[] | undefined = [];

  constructor() { }

  ngOnInit(): void {
  }

}
