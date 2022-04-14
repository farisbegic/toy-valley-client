import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {Route} from "../../constants/route.constants";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public user : User | undefined;

  public route = Route;
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      'name': [this.user?.name || '', Validators.required],
      'surname': [this.user?.surname || '', Validators.required],
      'phone': [this.user?.phone || '', Validators.required],
      'email': [this.user?.email || '', [Validators.required, Validators.email]],
      'password': [this.user?.password || '', Validators.required],
      'confirm_password': [this.user?.confirm_password || '', Validators.required]
    }, {

      }
    )
  }

  public submit(): void {
    console.log(this.form.value);
  }

}
