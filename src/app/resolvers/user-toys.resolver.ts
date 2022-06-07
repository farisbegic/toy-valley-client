import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ItemsModel} from "../models/items.model";
import {Observable} from "rxjs";
import {ToysService} from "../services/toys.service";
import {User} from "../models/user.model";
import {Route} from "../constants/route.constants";
import {City} from "../models/city.model";

@Injectable({providedIn: "root"})
export class UserToysResolver implements Resolve<ItemsModel[]> {

  constructor(private toyService: ToysService) {
  }

  /*resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ItemsModel[]> | Promise<ItemsModel[]> | ItemsModel[] {
    const id: string | null = "50";
    return this.toyService.getItemsByUser(id!);
  }*/

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ItemsModel[]> | Promise<ItemsModel[]> | ItemsModel[] {
    const id = route.paramMap.get(Route.ID.substring(1));
    const toys = this.toyService.getItemsByUser(id!);
    if(!toys) {
      throw 'Toys not found!';
    }
    return toys;
  }

}
