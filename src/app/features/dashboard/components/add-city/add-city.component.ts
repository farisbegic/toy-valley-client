import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {

  public form!: FormGroup;
  @Output() saveCity: EventEmitter<string> = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'name': [null, Validators.compose([Validators.required])]
    })
  }

  public submit(): void {
    if (!this.form.valid) {
      return;
    }

    this.saveCity.emit(this.form.value.name);
  }


}
