import {ItemProperty} from "./enums/item-property.enum";
import {Gender} from "./enums/gender.enum";
import {Condition} from "./enums/condition.enum";

export interface ItemsModel {
  [ItemProperty.id]: number,
  [ItemProperty.name]: string,
  [ItemProperty.description]: string,
  [ItemProperty.brand]: string,
  [ItemProperty.gender]: Gender,
  [ItemProperty.condition]: Condition,
  [ItemProperty.age]: number,
  [ItemProperty.date_purchased]: string
}
