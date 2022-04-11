import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../models/user.model";
import {Route} from "../../constants/route.constants";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  fields: String[] = ['Name', 'Surname', 'Phone Number', 'E-Mail', 'Password', 'Confirm Password'];
  examples: String[] = ['Ex. Emily', "Ex. O'Brien", 'Ex. +38712345678', 'Ex. name.surname@gmail.com', 'Password', 'Password'];

  users: User[] = [];
  public route = Route;

  public submit(): void {

  }
}
