import {Component, Input} from '@angular/core';
import {TopTraders} from "../../../../models/top-traders.model";

@Component({
  selector: 'app-top-traders',
  templateUrl: './top-traders.component.html',
  styleUrls: ['./top-traders.component.scss', '../../../../../styles.scss']
})
export class TopTradersComponent {
  @Input() dataSource: TopTraders[] = [];

  columns = [
    {
      columnDef: 'id',
      header: 'ID',
      cell: (element: TopTraders) => `${element.id}`,
    },
    {
      columnDef: 'firstName',
      header: 'First Name',
      cell: (element: TopTraders) => `${element.firstName}`,
    },
    {
      columnDef: 'lastName',
      header: 'Full Name',
      cell: (element: TopTraders) => `${element.lastName}`,
    },
    {
      columnDef: 'trades',
      header: 'Trades',
      cell: (element: TopTraders) => `${element.trades}`,
    }
  ];

  displayedColumns = this.columns.map(c => c.columnDef);

}
