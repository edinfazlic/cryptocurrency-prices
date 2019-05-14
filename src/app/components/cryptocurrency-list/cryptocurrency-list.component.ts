import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Cryptocurrency} from '../../model/cryptocurrency.model';
import {CryptocurrencyService} from '../../service/cryptocurrency.service';

@Component({
  selector: 'app-cryptocurrency-list',
  templateUrl: './cryptocurrency-list.component.html',
  styleUrls: ['./cryptocurrency-list.component.scss']
})
export class CryptocurrencyListComponent implements OnInit {
  displayedColumns: string[] = ['rank', 'symbol', 'price', 'change'];
  dataSource = new MatTableDataSource<Cryptocurrency>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private cryptocurrencyService: CryptocurrencyService) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.cryptocurrencyService.getTopNByFiat(100, 'USD')
      .subscribe((data: Cryptocurrency[]) => {
        this.dataSource.data = data;
      });
  }
}
