import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from "../models/city.model";
import {environment} from "../../environments/environment";

@Injectable()
export class CityService {
  private readonly baseUrl: string = `${environment.backendUrl}/cities`;

  constructor(private http:HttpClient) {
  }

  public getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.baseUrl);
  }

  public addCity(name: string): Observable<City[]> {
    return this.http.post<City[]>(this.baseUrl, { name })
  }

  public removeCity(city: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${city}`);
  }
}
