import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../models/user.model";
import {City} from "../../../models/city.model";
import {Route} from "../../../constants/route.constants";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  @Input()
  cities: City[] | undefined;

  @Input()
  user: User | undefined;

  @Output()
  updateUser: EventEmitter<User> = new EventEmitter<User>();

  public route = Route;
  public form!: FormGroup;
  public hide: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      'name': [this.user?.name, Validators.required],
      'surname': [this.user?.surname, Validators.required],
      'phone': [this.user?.phone, Validators.required],
      'address': [this.user?.address, Validators.required],
      'city': [this.user?.city, Validators.required],
      'email': [this.user?.email, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    })
  }

  public submit(): void {
    if (!this.form.valid) {
      return;
    }

    this.updateUser.emit(this.form.value);

    //this.resetForm();
  }

  private resetForm(): void {
    this.form.reset();
  }

  public goBack(): void {
    this.router.navigate([Route.PROFILE]);
  }

}
