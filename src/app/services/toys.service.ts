import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ItemsModel} from "../models/items.model";
import {environment} from "../../environments/environment";
import {SearchItemsModel} from "../models/search-items.model";
import {Gender} from "../models/enums/gender.enum";
import {Condition} from "../models/enums/condition.enum";

@Injectable()
export class ToysService {
  private readonly url: string = environment.backendUrl + '/toys';

  constructor(private http:HttpClient) {
  }

  public getItemsByCategory(categoryId: string): Observable<ItemsModel[]> {
    return this.http.get<ItemsModel[]>(`${this.url}/category/${categoryId}`);
  }
  public getItemsByName(name: string): Observable<SearchItemsModel[]> {
    return this.http.get<ItemsModel[]>(`${this.url}/search/${name}`)
  }
  public getItemsByLocation(locationId: string): Observable<ItemsModel[]> {
    return this.http.get<ItemsModel[]>(`${this.url}/city/${locationId}`)
  }

  public getItemsByGender(genderId: string): Observable<ItemsModel[]> {
    return this.http.get<ItemsModel[]>(`${this.url}/gender/${genderId}`)
  }

  public getItemsByCondition(conditionId: string): Observable<ItemsModel[]> {
    return this.http.get<ItemsModel[]>(`${this.url}/condition/${conditionId}`)
  }


}
