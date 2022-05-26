import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {City} from "../models/city.model";
import {CityService} from "../services/city.service";

@Injectable()
export class CitiesResolver implements Resolve<City[]> {

  constructor(private cityService:CityService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<City[]> | Promise<City[]> | City[] {
    return this.cityService.getCities();
  }

}
