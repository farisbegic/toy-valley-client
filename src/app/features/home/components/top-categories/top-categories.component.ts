import {Component} from '@angular/core';
import {ChipsModel} from "../../../../models/chips.model";
import {Route} from "../../../../constants/route.constants";

@Component({
  selector: 'app-top-categories',
  templateUrl: './top-categories.component.html',
  styleUrls: ['./top-categories.component.scss', '../../../../../styles.scss']
})
export class TopCategoriesComponent {
  public fullUrl: string = Route.TOYS + Route.SEPARATOR + Route.CATEGORY + Route.SEPARATOR;
  public chips: Array<ChipsModel> = new Array<ChipsModel>(
    {
      name: "CARS",
      url: `${this.fullUrl}/3`
    },
    {
      name: "DOLLS",
      url: `${this.fullUrl}/3`
    },
    {
      name: "SOLDIERS",
      url: `${this.fullUrl}/2`
    },
    {
      name: "CARDS",
      url: `${this.fullUrl}/2`
    },
    {
      name: "VIEW MORE",
      url: `${this.fullUrl}/3`
    },
  );
}
