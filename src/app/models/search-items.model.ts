import {ItemProperty} from "./enums/item-property.enum";

export interface SearchItemsModel {
  [ItemProperty.id]: number,
  [ItemProperty.name]: string
}
