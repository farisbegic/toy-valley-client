import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ItemsModel} from "../models/items.model";
import {Observable} from "rxjs";
import {ToysService} from "../services/toys.service";
import {Route} from "../constants/route.constants";


@Injectable({providedIn: "root"})
export class ConditionToysResolver implements Resolve<ItemsModel[]>{
  constructor(private toyService: ToysService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ItemsModel[]> | Promise<ItemsModel[]> | ItemsModel[] {
    const condition: string | null = route.paramMap.get(Route.ID.substring(1));
    return this.toyService.getItemsByCondition(condition!);
  }
}



