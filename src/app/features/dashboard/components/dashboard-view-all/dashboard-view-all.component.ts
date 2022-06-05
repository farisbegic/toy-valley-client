import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {Route} from "../../../../constants/route.constants";

@Component({
  selector: 'app-dashboard-view-all',
  templateUrl: './dashboard-view-all.component.html',
  styleUrls: ['./dashboard-view-all.component.scss']
})
export class DashboardViewAllComponent implements OnInit {
  Route: any = Route;
  clickedRows: Array<number> = new Array<number>();

  @Input() dataSource: any = [{position: "helo"}];
  @Input() displayedColumns: string[] = ["position"];
  @Output() deleteItems: EventEmitter<number> = new EventEmitter<number>();

  constructor(public dialog: MatDialog, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public removeItem(): void {
    this.deleteItems.emit(this.clickedRows[0]);
    this.clickedRows.pop()
  }

}
