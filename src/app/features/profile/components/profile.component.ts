import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../models/user.model";
import {Route} from "../../../constants/route.constants";
import {Router} from "@angular/router";
import {ItemsModel} from "../../../models/items.model";
import {ToysService} from "../../../services/toys.service";
import {ExchangeRequestsModel} from "../../../models/exchange-requests.model";
import {ItemProperty} from "../../../models/enums/item-property.enum";
import {ExchangeRequestsProperty} from "../../../models/enums/exchange-requests.enum";
import {ToyExchangeService} from "../../../services/toy-exchange.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input()
  user: User | undefined;

  @Input()
  requests: ExchangeRequestsModel[] | undefined;

  @Input()
  toys: ItemsModel[] | undefined;

  @Output()
  deleteToy: EventEmitter<ItemsModel> = new EventEmitter<ItemsModel>();

  @Output()
  updateExchangeRequest: EventEmitter<ExchangeRequestsModel> = new EventEmitter<ExchangeRequestsModel>();

  public route = Route;
  image: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  public url: string = Route.TOY

  constructor(
    private router: Router,
    private toyService: ToysService,
    private toyExchangeService: ToyExchangeService,
  ) {}

  ngOnInit(): void {
  }

  getShortenedText(description: string) : string {
    if (description == null){
      return '';
    }
    const length = 100;
    let text = description.substring(0, length);
    if (text.length === length) {
      text += '...';
    }
    return text;
  }

  public edit(): void {
    this.router.navigate([Route.PROFILE + Route.SEPARATOR + Route.EDIT]);
  }

  public add(): void {
    this.router.navigate([Route.PROFILE + Route.SEPARATOR + Route.ADDTOY]);
  }

  public delete(toy: ItemsModel): void {
    toy[ItemProperty.active] = false;
    this.toyService.update(toy, toy[ItemProperty.id]).subscribe(value => {
      this.router.navigate([Route.SEPARATOR + Route.PROFILE]);
    });
  }

  public updateRequest(exchangeRequestsModel: ExchangeRequestsModel): void {
    exchangeRequestsModel[ExchangeRequestsProperty.active] = false;
    this.toyExchangeService.update(exchangeRequestsModel, exchangeRequestsModel[ExchangeRequestsProperty.id]).subscribe(value => {
      this.router.navigate([Route.SEPARATOR + Route.PROFILE]);
    });
  }
}
