import {Route} from "./route.constants";

export class HeaderButtonsConstants {
  public static buttons = [
    {
      link: Route.EMPTY,
      text: "Home"
    },
    {
      link: Route.EMPTY + Route.SEPARATOR + Route.CATEGORIES,
      text: "Categories"
    },
  ]
}
