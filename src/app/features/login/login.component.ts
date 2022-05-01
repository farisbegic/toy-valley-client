import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Route} from "../../constants/route.constants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','../../../styles.scss']
})
export class LoginComponent implements OnInit {

  public route = Route;
  public form!: FormGroup;
  public hide: boolean = true;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
    })
}

public submit():void {
  if (!this.form.valid) {
  return;
}
this.resetForm();
}

private resetForm(): void {
  this.form.reset();
}

}






