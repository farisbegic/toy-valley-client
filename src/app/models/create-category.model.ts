import {CategoryProperty} from './enums/category-property.enum';

export interface CreateCategoryModel {
  [CategoryProperty.name] : string;
  [CategoryProperty.description] : string;
}
