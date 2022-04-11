import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  users: User[] = [];
  
  public submit(): void {

  }
}
