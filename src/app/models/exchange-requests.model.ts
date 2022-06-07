import {ExchangeRequestsProperty} from "./enums/exchange-requests.enum";
import {ItemsModel} from "./items.model";

export interface ExchangeRequestsModel {
  [ExchangeRequestsProperty.id]: number,
  [ExchangeRequestsProperty.toy_offered]: ItemsModel,
  [ExchangeRequestsProperty.toy_requested]: ItemsModel,
  [ExchangeRequestsProperty.active]: boolean,
  [ExchangeRequestsProperty.request_date]: string,
  [ExchangeRequestsProperty.accept_date]: string,
}
