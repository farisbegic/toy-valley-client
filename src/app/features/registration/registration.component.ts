import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {Route} from "../../constants/route.constants";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss', '../../../styles.scss']
})
export class RegistrationComponent implements OnInit {

  public route = Route;
  public form!: FormGroup;
  public hide: boolean = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      'name': [null, Validators.required],
      'surname': [null, Validators.required],
      'phone': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    })
  }

  public submit(): void {
    console.log(this.form.value);
  }

}
