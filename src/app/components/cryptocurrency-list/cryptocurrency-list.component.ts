import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Store} from '@ngrx/store';
import {Cryptocurrency} from '../../model/cryptocurrency.model';
import {CryptocurrencyService} from '../../service/cryptocurrency.service';
import * as CryptocurrencyActions from '../../shared/cryptocurrency.actions';
import ReducerNames from '../../model/reducer-names';
import {CryptocurrencyCollectionModel} from '../../model/cryptocurrency-collection.model';

interface AppState {
  [ReducerNames.CURRENCIES]: CryptocurrencyCollectionModel;
}

@Component({
  selector: 'app-cryptocurrency-list',
  templateUrl: './cryptocurrency-list.component.html',
  styleUrls: ['./cryptocurrency-list.component.scss']
})
export class CryptocurrencyListComponent implements OnInit {
  displayedColumns: string[] = ['rank', 'symbol', 'price', 'change'];
  dataSource = new MatTableDataSource<Cryptocurrency>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private cryptocurrencyService: CryptocurrencyService,
              private store: Store<AppState>) {
    this.subscribeEvents();
  }

  private subscribeEvents() {
    this.store.select(ReducerNames.CURRENCIES)
      .subscribe((cryptocurrencyCollectionModel: CryptocurrencyCollectionModel) => {
        this.dataSource.data = cryptocurrencyCollectionModel.cryptocurrencies;
      });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.refresh();
  }

  refresh() {
    this.cryptocurrencyService.getTopNByFiat(100, 'USD')
      .subscribe((data: Cryptocurrency[]) => {
        this.store.dispatch(new CryptocurrencyActions.FetchCurrencies(data));
      });
  }
}
