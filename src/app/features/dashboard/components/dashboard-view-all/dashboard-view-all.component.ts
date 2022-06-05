import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-view-all',
  templateUrl: './dashboard-view-all.component.html',
  styleUrls: ['./dashboard-view-all.component.scss']
})
export class DashboardViewAllComponent implements OnInit {

  @Input() dataSource: any | undefined;
  @Input() displayedColumns: string[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
