import {Component, Input, OnInit} from '@angular/core';
import {ToyDetail} from "../../../../models/toy-detail";
import {MatDialog} from "@angular/material/dialog";
import {ExchangeRequestDialogComponent} from "../exchange-request-dialog/exchange-request-dialog.component";
import {ItemsModel} from "../../../../models/items.model";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-toy-information',
  templateUrl: './toy-information.component.html',
  styleUrls: ['./toy-information.component.scss', '../../../../../styles.scss']
})
export class ToyInformationComponent implements OnInit {
  @Input() toy: ToyDetail | undefined;
  @Input() visitorToys: ItemsModel[] | undefined;
  image: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

  constructor(public dialog: MatDialog, public authService: AuthService) { }

  openDialog() {
    const dialogRef = this.dialog.open(ExchangeRequestDialogComponent, {
      data: {
        visitorToys: this.visitorToys,
        toyId: this.toy?.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ngOnInit(): void {
  }

}
