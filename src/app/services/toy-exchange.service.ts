import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from "../models/city.model";

@Injectable()
export class ToyExchangeService {
  private readonly baseUrl: string = 'http://localhost:8080/toy-exchange';

  constructor(private http:HttpClient) {
  }

  public createToyExchange(toyRequested: number, toyOffered: number, message: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, {
      toyRequested,
      toyOffered,
      message
    })
  }

  public getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.baseUrl);
  }
}
