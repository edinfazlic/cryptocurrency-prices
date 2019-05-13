import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Cryptocurrency} from '../shared/cryptocurrency.model';

@Component({
  selector: 'app-cryptocurrency-list',
  templateUrl: './cryptocurrency-list.component.html',
  styleUrls: ['./cryptocurrency-list.component.scss']
})
export class CryptocurrencyListComponent implements OnInit {
  displayedColumns: string[] = ['rank', 'symbol', 'price', 'change'];
  dataSource = new MatTableDataSource<Cryptocurrency>(CURRENCY_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

const CURRENCY_DATA: Cryptocurrency[] = [
  {rank: 1, change: 1.054, price: 1.0079, symbol: 'H'},
  {rank: 2, change: 1.8, price: 4.0026, symbol: 'He'},
  {rank: 3, change: 2.054, price: 6.941, symbol: 'Li'},
  {rank: 4, change: 1.7, price: 9.0122, symbol: 'Be'},
  {rank: 5, change: 7.054, price: 10.811, symbol: 'B'},
  {rank: 6, change: 1.7, price: 12.0107, symbol: 'C'},
  {rank: 7, change: 1.22, price: 14.0067, symbol: 'N'},
  {rank: 8, change: 11.454, price: 15.9994, symbol: 'O'},
  {rank: 9, change: 1.0, price: 18.9984, symbol: 'F'},
  {rank: 10, change: 1.054, price: 20.1797, symbol: 'Ne'},
  {rank: 11, change: 3.5, price: 22.9897, symbol: 'Na'},
  {rank: 12, change: 3.4, price: 24.305, symbol: 'Mg'},
  {rank: 13, change: 4.05, price: 26.9815, symbol: 'Al'},
  {rank: 14, change: 8.04, price: 28.0855, symbol: 'Si'},
  {rank: 15, change: 9.14, price: 30.9738, symbol: 'P'},
  {rank: 16, change: 100.054, price: 32.065, symbol: 'S'},
  {rank: 17, change: 0.88, price: 35.453, symbol: 'Cl'},
  {rank: 18, change: 0.3, price: 39.948, symbol: 'Ar'},
  {rank: 19, change: 0.254, price: 39.0983, symbol: 'K'},
  {rank: 20, change: 1.154, price: 40.078, symbol: 'Ca'},
];
