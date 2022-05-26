import {City} from "./city.model";

export class User {
  id?: number;
  name?: string;
  surname? : string;
  phone?: string;
  address? : string;
  city? : City;
  email?: string;
  password? : string;
  active?: boolean;
}
