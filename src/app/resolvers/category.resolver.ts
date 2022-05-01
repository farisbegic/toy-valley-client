import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Route} from '../constants/route.constants';
import {Category} from "../models/category.model";
import {CategoryService} from "../services/category.service";


@Injectable({providedIn: 'root'})
export class CategoryResolver implements Resolve<Category> {

  constructor(private categoryService:CategoryService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Category> | Promise<Category> | Category {
    const id = route.paramMap.get(Route.ID.substring(1));
    const category = this.categoryService.getCategory(id!);
    if(!category) {
      throw 'Category not found!';
    }
    return category;
  }

}
