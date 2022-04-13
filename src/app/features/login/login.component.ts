import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Route} from "../../constants/route.constants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','../../../styles.scss']
})
export class LoginComponent  {

  fields: String[] = ['E-Mail', 'Password'];
  examples: String[] = ['Ex. name.surname@gmail.com', 'Password'];

  public route = Route;


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






