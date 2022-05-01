import {CategoryProperty} from './category-property.enum';
import {CategoryName} from './category-name.enum';

export interface Category {
  [CategoryProperty.id]? : number;
  [CategoryProperty.name] : CategoryName;
  [CategoryProperty.description] : string;
}
