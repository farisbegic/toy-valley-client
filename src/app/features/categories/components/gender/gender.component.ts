import {Component} from '@angular/core';
import {ChipsModel} from "../../../../models/chips.model";
import {Route} from "../../../../constants/route.constants";

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss', '../../../../../styles.scss']
})
export class GenderComponent {
  public fullUrl: string = Route.TOYS + Route.SEPARATOR + Route.GENDER + Route.SEPARATOR;
  public chips: Array<ChipsModel> = new Array<ChipsModel>(
    {
      name: "FEMALE",
      url: `${this.fullUrl}/female`
    },
    {
      name: "MALE",
      url: `${this.fullUrl}/male`
    },
    {
      name: "UNISEX",
      url: `${this.fullUrl}/unisex`
    },
  );
}
