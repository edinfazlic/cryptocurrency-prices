import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CryptocurrencyCollectionModel } from '../../model/cryptocurrency-collection.model';
import { Cryptocurrency } from '../../model/cryptocurrency.model';
import { FiatCurrency } from '../../model/fiat-currency.enum';
import { FiatStateModel } from '../../model/fiat-state.model';
import { ReducerName } from '../../model/reducer-name.enum';
import { Route } from '../../model/route.enum';
import * as Action from '../../store/cryptocurrency.actions';

interface AppState {
  [ReducerName.CURRENCIES]: CryptocurrencyCollectionModel;
  [ReducerName.FIAT_CURRENCY_SELECTION]: FiatStateModel;
}

@Component({
  selector: 'app-cryptocurrency-list',
  templateUrl: './cryptocurrency-list.component.html',
  styleUrls: ['./cryptocurrency-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptocurrencyListComponent implements OnInit {
  displayedColumns: string[] = ['rank', 'symbol', 'price', 'change'];
  dataSource = new MatTableDataSource<Cryptocurrency>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  fiatCurrency: FiatCurrency;

  constructor(private store$: Store<AppState>,
              private router: Router) {
    this.subscribeEvents();
  }

  private subscribeEvents() {
    this.store$.select(ReducerName.CURRENCIES)
      .subscribe((cryptocurrencyCollectionModel: CryptocurrencyCollectionModel) => {
        this.dataSource.data = cryptocurrencyCollectionModel.cryptocurrencies;
      });
    this.store$.select(ReducerName.FIAT_CURRENCY_SELECTION)
      .subscribe((fiatState: FiatStateModel) => {
        this.fiatCurrency = fiatState.currency;
      });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.store$.dispatch(new Action.LoadCryptocurrencies());
  }

  refresh() {
    this.store$.dispatch(new Action.ReloadCryptocurrencies());
  }

  showDetails(cryptocurrency: Cryptocurrency) {
    this.store$.dispatch(new Action.SelectCryptocurrency(cryptocurrency));
    this.router.navigate([Route.DETAILS]);
  }
}
