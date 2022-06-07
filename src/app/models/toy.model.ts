import {Gender} from "./enums/gender.enum";
import {Condition} from "./enums/condition.enum";

export class Toy {
  id?: number;
  name?: string;
  brand? : string;
  age?: number;
  gender? : Gender;
  condition?: Condition;
  description? : string;
}
