import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Category} from "../models/category.model";
import {CategoryService} from "../services/category.service";
import {TopTraders} from "../models/top-traders.model";
import {UserService} from "../services/user.service";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";


@Injectable({providedIn: 'root'})
export class CategoriesResolver implements Resolve<Category[]> {

  constructor(private categoryService:CategoryService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Category[]> | Promise<Category[]> | Category[] {
    return this.categoryService.getCategories();
  }

}



