import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddCityComponent} from "../add-city/add-city.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dashboard-view-all',
  templateUrl: './dashboard-view-all.component.html',
  styleUrls: ['./dashboard-view-all.component.scss']
})
export class DashboardViewAllComponent implements OnInit {

  @Input() dataSource: any | undefined;
  @Input() displayedColumns: string[] | undefined;

  constructor(public dialog: MatDialog, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
