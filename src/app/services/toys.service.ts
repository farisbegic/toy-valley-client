import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ItemsModel} from "../models/items.model";
import {environment} from "../../environments/environment";
import {SearchItemsModel} from "../models/search-items.model";

@Injectable()
export class ToysService {
  private readonly url: string = environment.backendUrl + '/toys';

  constructor(private http:HttpClient) {
  }

  public getItems(categoryId: string): Observable<ItemsModel[]> {
    return this.http.get<ItemsModel[]>(`${this.url}/category/${categoryId}`);
  }
  public getItemsByName(name: string): Observable<SearchItemsModel[]> {
    return this.http.get<ItemsModel[]>(`${this.url}/search/${name}`)
  }
}
