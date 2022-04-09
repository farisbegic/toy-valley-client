import {Component, Input} from '@angular/core';
import {TopTraders} from "../../../../models/top-traders.model";

@Component({
  selector: 'app-top-traders',
  templateUrl: './top-traders.component.html',
  styleUrls: ['./top-traders.component.scss', '../../../../../styles.scss']
})
export class TopTradersComponent {
  topTraders: Array<TopTraders> = [
    {
      rank: 1,
      name: "Faris Begić",
      trades: 128
    },
    {
      rank: 2,
      name: "Adna Salković",
      trades: 128
    },
    {
      rank: 3,
      name: "Azra Kurtić",
      trades: 128
    },
  ]

  columns = [
    {
      columnDef: 'rank',
      header: 'Rank',
      cell: (element: TopTraders) => `${element.rank}`,
    },
    {
      columnDef: 'name',
      header: 'Full Name',
      cell: (element: TopTraders) => `${element.name}`,
    },
    {
      columnDef: 'trades',
      header: 'Trades',
      cell: (element: TopTraders) => `${element.trades}`,
    }
  ];
  dataSource = this.topTraders;
  displayedColumns = this.columns.map(c => c.columnDef);
}
