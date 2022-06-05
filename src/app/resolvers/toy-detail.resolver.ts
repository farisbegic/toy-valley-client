import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ItemsModel} from "../models/items.model";
import {Observable} from "rxjs";
import {ToysService} from "../services/toys.service";
import {Route} from "../constants/route.constants";
import {ToyDetail} from "../models/toy-detail";

@Injectable({providedIn: "root"})
export class ToyDetailResolver implements Resolve<ToyDetail>{
  constructor(private toyService: ToysService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ToyDetail> | Promise<ToyDetail> | ToyDetail {
    const id: string | null = route.paramMap.get(Route.ID.substring(1));
    return this.toyService.getItemDetails(id!);
  }
}
