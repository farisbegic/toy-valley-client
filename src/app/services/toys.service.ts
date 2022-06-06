import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ItemsModel} from "../models/items.model";
import {environment} from "../../environments/environment";
import {SearchItemsModel} from "../models/search-items.model";
import {ToyDetail} from "../models/toy-detail";
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
  public getItemsByUser(userId: string): Observable<ItemsModel[]> {
    return this.http.get<ItemsModel[]>(`${this.url}/user/${userId}`);
  }
  public getItemDetails(itemId: string): Observable<ToyDetail> {
    return this.http.get<ToyDetail>(`${this.url}/${itemId}`)
  }

  public getItemsByGender(genderId: Gender): Observable<ItemsModel[]> {
    return this.http.get<ItemsModel[]>(`${this.url}/gender/${genderId}`)
  }

  public getItemsByCondition(conditionId: Condition): Observable<ItemsModel[]> {
    return this.http.get<ItemsModel[]>(`${this.url}/condition/${conditionId}`)
  }


}
