import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from "../models/city.model";
import {environment} from "../../environments/environment";
import {ExchangeRequestsModel} from "../models/exchange-requests.model";
import {ItemsModel} from "../models/items.model";

@Injectable()
export class ToyExchangeService {
  private readonly baseUrl: string = `${environment.backendUrl}/toy-exchange`;

  constructor(private http:HttpClient) {
  }

  public createToyExchange(toyRequested: number, toyOffered: number, message: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, {
      toyRequested,
      toyOffered,
      message
    })
  }

  public getUserExchangeRequests(id: string): Observable<ExchangeRequestsModel[]> {
    return this.http.get<ExchangeRequestsModel[]>(this.baseUrl + "/user/" + id);
  }

  public update(exchangeRequestsModel: ExchangeRequestsModel, id: number | undefined): Observable<ExchangeRequestsModel> {
    return this.http.put<ExchangeRequestsModel>(`${this.baseUrl}/${id}`, exchangeRequestsModel);
  }
}
