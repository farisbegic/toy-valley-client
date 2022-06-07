import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from "../models/category.model";
import {CreateCategoryModel} from "../models/create-category.model";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly baseUrl: string = `${environment.backendUrl}/categories`;

  constructor(private http:HttpClient) {
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl);
  }

  public getCategory(id:string): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/${id}`);
  }

  public addCategory(category:CreateCategoryModel): Observable<Category> {
    return this.http.post<Category>(`${this.baseUrl}`, category);
  }

  public removeCategory(category: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${category}`);
  }
}



