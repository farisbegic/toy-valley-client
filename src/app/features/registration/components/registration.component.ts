import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Route} from "../../../constants/route.constants";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../../models/user.model";
import {City} from "../../../models/city.model";
import {ResolverResponse} from "../../../constants/resolver-response.constants";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss', '../../../../styles.scss']
})
export class RegistrationComponent implements OnInit {

  /*@Output()
  saveUser: EventEmitter<User> = new EventEmitter<User>();*/

  @Input()
  cities: City[] | undefined;

  /*@Input()
  user: User | undefined;*/

  public route = Route;
  public form!: FormGroup;
  public hide: boolean = true;
  //cities: string[] = ['Sarajevo', 'Tuzla', 'Banja Luka', 'Mostar', 'Zenica', 'Travnik'];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      'name': [null, Validators.required],
      'surname': [null, Validators.required],
      'phone': [null, Validators.required],
      'address': [null, Validators.required],
      'city': [null],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    })
  }

  public submit(): void {
    /*if (!this.form.valid) {
      return;
    }
    this.saveUser.emit(this.form.value);
    this.router.navigate([this.route.EMPTY]);*/
  }

  private resetForm(): void {
    this.form.reset();
  }
}
