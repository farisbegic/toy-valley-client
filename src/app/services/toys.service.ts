import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {ItemsModel} from "../models/items.model";
import {environment} from "../../environments/environment";
import {SearchItemsModel} from "../models/search-items.model";
import {ToyDetail} from "../models/toy-detail";
import {Toy} from "../models/toy.model";
import {ItemProperty} from "../models/enums/item-property.enum";

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

  public create(userId: number | undefined, toy: Toy): Observable<Toy> {
    return this.http.post<Toy>(`${this.url}/${userId}`, toy);
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

  public getItemsByGender(genderId: string): Observable<ItemsModel[]> {
    return this.http.get<ItemsModel[]>(`${this.url}/gender/${genderId}`)
  }

  public getItemsByCondition(conditionId: string): Observable<ItemsModel[]> {
    return this.http.get<ItemsModel[]>(`${this.url}/condition/${conditionId}`)
  }

  public delete(toyId: number): Observable<HttpResponse<any>> {
    return this.http.delete<HttpResponse<any>>(`${this.url}/${toyId}`);
  }
}
