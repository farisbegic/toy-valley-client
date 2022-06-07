import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Route} from '../constants/route.constants';
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";

@Injectable({providedIn: 'root'})
export class UserResolver implements Resolve<User> {

  constructor(private userService:UserService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> | Promise<User> | User {
    const id = route.paramMap.get(Route.ID.substring(1));
    const user = this.userService.getUser(id!);
    if(!user) {
      throw 'User not found!';
    }
    return user;
  }

}
