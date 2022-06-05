import {Route} from "./route.constants";

export class DashboardCategoriesConstants {
  public static elements = [
    {
      header: "City",
      text: "This card will prompt you to the page where you can see all the cities and add/remove ones you want.",
      link: Route.CITY
    },{
      header: "Category",
      text: "This card will prompt you to the page where you can see all categories and add/remove ones you want.",
      link: Route.CATEGORY
    }
  ]
}
