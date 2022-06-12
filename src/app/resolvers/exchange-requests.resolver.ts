import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../services/auth.service";
import {ExchangeRequestsModel} from "../models/exchange-requests.model";
import {ToyExchangeService} from "../services/toy-exchange.service";

@Injectable({providedIn: "root"})
export class RequestResolver implements Resolve<ExchangeRequestsModel[]> {

  constructor(private toyExchangeService: ToyExchangeService, private authService: AuthService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ExchangeRequestsModel[]> | Promise<ExchangeRequestsModel[]> | ExchangeRequestsModel[] {
    const id: string | null = this.authService.getUserId() || '0';
    return this.toyExchangeService.getUserExchangeRequests(id!);
  }


}

