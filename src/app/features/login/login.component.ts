import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','../../../styles.scss'] // dodani path
})
export class LoginComponent  {

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
  this.form = this.formBuilder.group({

  });
}
public form!: FormGroup;
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
