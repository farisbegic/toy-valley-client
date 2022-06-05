import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CreateCategoryModel} from "../../../../models/create-category.model";
import {CategoryProperty} from "../../../../models/enums/category-property.enum";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  public form!: FormGroup;
  @Output() saveCategory: EventEmitter<CreateCategoryModel> = new EventEmitter<CreateCategoryModel>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'name': [null, Validators.compose([Validators.required])],
      'description': [null, Validators.compose([Validators.required])]
    })
  }

  public submit(): void {
    if (!this.form.valid) {
      return;
    }

    this.saveCategory.emit({
      [CategoryProperty.name]: this.form.value.name,
      [CategoryProperty.description]: this.form.value.description
    });
  }

}
