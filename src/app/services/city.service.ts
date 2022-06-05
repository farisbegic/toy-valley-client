import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from "../models/city.model";

@Injectable()
export class CityService {
  private readonly baseUrl: string = 'http://localhost:8080/cities';

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
