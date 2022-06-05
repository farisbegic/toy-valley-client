import {CategoryProperty} from './enums/category-property.enum';
import {CategoryName} from './enums/category-name.enum';

export interface CreateCategoryModel {
  [CategoryProperty.name] : string;
  [CategoryProperty.description] : string;
}
