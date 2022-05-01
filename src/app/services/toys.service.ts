import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ItemsModel} from "../models/items.model";

@Injectable()
export class ToysService {
  private readonly url: string = 'http://localhost:8080/toys';

  constructor(private http:HttpClient) {
  }

  public getItems(categoryId: string): Observable<ItemsModel[]> {
    return this.http.get<ItemsModel[]>(`${this.url}/category/${categoryId}`);
  }
}
