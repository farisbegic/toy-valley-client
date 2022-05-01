import {Route} from "./route.constants";

export class HeaderButtonsConstants {
  public static buttons = [
    {
      link: Route.EMPTY,
      text: "Home"
    },
    {
      link: Route.EMPTY + Route.SEPARATOR + Route.LOGIN,
      text: "Login"
    },
    {
      link: Route.EMPTY + Route.SEPARATOR + Route.REGISTER,
      text: "Register"
    },
    {
      link: Route.EMPTY + Route.SEPARATOR + Route.CATEGORIES,
      text: "Categories"
    },

  ]
}
