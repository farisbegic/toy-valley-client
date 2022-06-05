import {Component} from '@angular/core';
import {ChipsModel} from "../../../../models/chips.model";
import {Route} from "../../../../constants/route.constants";

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss', '../../../../../styles.scss']
})
export class ConditionComponent {
  public fullUrl: string = Route.TOYS + Route.SEPARATOR + Route.CONDITION + Route.SEPARATOR;
  public chips: Array<ChipsModel> = new Array<ChipsModel>(
    {
      name: "Brand New",
      url: `${this.fullUrl}/1`
    },
    {
      name: "Used",
      url: `${this.fullUrl}/2`
    },

  );
}
