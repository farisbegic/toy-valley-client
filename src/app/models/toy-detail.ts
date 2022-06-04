import {UserProperty} from "./enums/user-property.enum";
import {ItemProperty} from "./enums/item-property.enum";
import {Condition} from "./enums/condition.enum";
import {Gender} from "./enums/gender.enum";
import {User} from "./user.model";

export interface ToyDetail {
  [ItemProperty.id]: number,
  [ItemProperty.name]: string,
  [ItemProperty.description]: string,
  [ItemProperty.brand]: string,
  [ItemProperty.condition]: Condition,
  [ItemProperty.gender]: Gender,
  [ItemProperty.age]: number,
  [ItemProperty.date_purchased]: string,
  [ItemProperty.user]: User,
  [ItemProperty.preferences]: string[]
}
