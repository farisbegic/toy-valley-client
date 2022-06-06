import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ItemsModel} from "../models/items.model";
import {Observable} from "rxjs";
import {ToysService} from "../services/toys.service";
import {Gender} from "../models/enums/gender.enum";


@Injectable({providedIn: "root"})
export class GenderToysResolverUnisex implements Resolve<ItemsModel[]>{
  constructor(private toyService: ToysService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ItemsModel[]> | Promise<ItemsModel[]> | ItemsModel[] {

    return this.toyService.getItemsByGender(Gender.unisex);
  }
}



