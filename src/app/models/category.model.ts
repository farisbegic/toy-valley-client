import {CategoryProperty} from './enums/category-property.enum';
import {CategoryName} from './enums/category-name.enum';

export interface Category {
  [CategoryProperty.id]? : number;
  [CategoryProperty.name] : CategoryName;
  [CategoryProperty.description] : string;
}
