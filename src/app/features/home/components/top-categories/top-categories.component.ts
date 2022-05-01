import {Component} from '@angular/core';
import {ChipsModel} from "../../../../models/chips.model";
import {Route} from "../../../../constants/route.constants";

@Component({
  selector: 'app-top-categories',
  templateUrl: './top-categories.component.html',
  styleUrls: ['./top-categories.component.scss', '../../../../../styles.scss']
})
export class TopCategoriesComponent {
  public chips: Array<ChipsModel> = new Array<ChipsModel>(
    {
      name: "CARS",
      url: `${Route.TOYS}/3`
    },
    {
      name: "DOLLS",
      url: `${Route.TOYS}/3`
    },
    {
      name: "SOLDIERS",
      url: `${Route.TOYS}/2`
    },
    {
      name: "CARDS",
      url: `${Route.TOYS}/2`
    },
    {
      name: "VIEW MORE",
      url: `${Route.TOYS}/3`
    },
  );
}
