import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Route} from '../constants/route.constants';
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";
import {AuthService} from "../services/auth.service";

@Injectable({providedIn: 'root'})
export class UserResolver implements Resolve<User> {

  constructor(private userService:UserService, private authService: AuthService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> | Promise<User> | User {
    const id = this.authService.getUserId();
    const user = this.userService.getUser(id!);
    if(!user) {
      throw 'User not found!';
    }
    return user;
  }

}
