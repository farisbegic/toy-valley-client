import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ItemsModel} from "../models/items.model";
import {Observable} from "rxjs";
import {ToysService} from "../services/toys.service";
import {Condition} from "../models/enums/condition.enum";


@Injectable({providedIn: "root"})
export class ConditionToysBrandNewResolver implements Resolve<ItemsModel[]>{
  constructor(private toyService: ToysService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ItemsModel[]> | Promise<ItemsModel[]> | ItemsModel[] {

    return this.toyService.getItemsByCondition(Condition.brandNew);
  }
}



