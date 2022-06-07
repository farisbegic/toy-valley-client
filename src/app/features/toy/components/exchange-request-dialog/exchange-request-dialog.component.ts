import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ItemsModel} from "../../../../models/items.model";
import {ToyExchangeService} from "../../../../services/toy-exchange.service";

@Component({
  selector: 'app-exchange-request-dialog',
  templateUrl: './exchange-request-dialog.component.html',
  styleUrls: ['./exchange-request-dialog.component.scss']
})
export class ExchangeRequestDialogComponent implements OnInit {

  public form!: FormGroup;
  public visitorToys: ItemsModel[] | undefined;
  public toyId: string = '';


  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private toyExchangeService: ToyExchangeService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'visitorToy': [null, Validators.compose([Validators.required])],
      'comment': [null, Validators.compose([Validators.required])],
    })
    this.visitorToys = this.data.visitorToys;
    this.toyId = this.data.toyId;
  }

  public submit(): void {
    const { visitorToy , comment } = this.form.value;

    if (!this.form.valid) {
      return;
    }

    this.toyExchangeService.createToyExchange(Number(this.toyId), visitorToy, comment).subscribe(() => {
      this.dialog.closeAll();
    });
  }

  private resetForm(): void {
    this.form.reset();
  }

}
