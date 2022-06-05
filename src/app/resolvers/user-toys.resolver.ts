import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ItemsModel} from "../models/items.model";
import {Observable} from "rxjs";
import {ToysService} from "../services/toys.service";

@Injectable({providedIn: "root"})
export class UserToysResolver implements Resolve<ItemsModel[]>{
  constructor(private toyService: ToysService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ItemsModel[]> | Promise<ItemsModel[]> | ItemsModel[] {
    const id: string | null = "1";
    return this.toyService.getItemsByUser(id!);
  }
}
