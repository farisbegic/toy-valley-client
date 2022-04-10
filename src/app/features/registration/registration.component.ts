import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  @Output()
  addUser: EventEmitter<User> = new EventEmitter<User>();

  name: string = '';
  surname : string = '';
  phone_number : string = '';
  e_mail : string = '';
  password : string = '';

  public submit(): void {
    const user = {
      name: this.name,
      surname: this.surname,
      phone_number: this.phone_number,
      e_mail: this.e_mail,
      password: this.password,
    };

    this.addUser.emit(user);
  }
}
