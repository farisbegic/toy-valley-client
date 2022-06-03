import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TopTraders} from "../models/top-traders.model";
import {UserService} from "../services/user.service";


@Injectable({providedIn: 'root'})
export class TopTradersResolver implements Resolve<TopTraders[]> {

  constructor(private userService:UserService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<TopTraders[]> | Promise<TopTraders[]> | TopTraders[] {
    return this.userService.getTopTraders();
  }

}
