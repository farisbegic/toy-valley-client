import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Route} from "../../constants/route.constants";
import {Router} from '@angular/router';
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','../../../styles.scss']
})
export class LoginComponent implements OnInit {

  public route = Route;
  public form!: FormGroup;
  public hide: boolean = true;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
    })
}


public handleFormSubmit(): void{
    this.form!.markAllAsTouched();

    if (this.form!.valid) {
      this.authService.logIn({ ...this.form!.value }).subscribe(() => {
        this.router.navigate([Route.CATEGORIES]);
      });
    }
  }
}












