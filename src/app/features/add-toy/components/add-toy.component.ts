import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Route} from "../../../constants/route.constants";
import {Gender} from "../../../models/enums/gender.enum";
import {Condition} from "../../../models/enums/condition.enum";
import {User} from "../../../models/user.model";
import {Toy} from "../../../models/toy.model";
import {City} from "../../../models/city.model";

@Component({
  selector: 'app-add-toy',
  templateUrl: './add-toy.component.html',
  styleUrls: ['./add-toy.component.scss']
})
export class AddToyComponent implements OnInit {

  public route = Route;
  public form!: FormGroup;

  @Input()
  genders: Gender[] | undefined;

  @Input()
  conditions: Condition[] | undefined;

  @Output()
  saveToy: EventEmitter<Toy> = new EventEmitter<Toy>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      'name': [null, Validators.required],
      'brand': [null, Validators.required],
      'age': [null, Validators.required],
      'gender': [null, Validators.required],
      'condition': [null, Validators.required],
      'description': [null, Validators.required],
    })
  }

  public submit(): void {
    if (!this.form.valid) {
      return;
    }

    this.saveToy.emit(this.form.value);

    this.resetForm();
  }

  private resetForm(): void {
    this.form.reset();
  }

}
