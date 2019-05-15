import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {Cryptocurrency} from '../../model/cryptocurrency.model';
import {CryptocurrencyService} from '../../service/cryptocurrency.service';
import * as CryptocurrencyActions from '../../shared/cryptocurrency.actions';
import {ReducerName} from '../../model/reducer-name.enum';
import {CryptocurrencyCollectionModel} from '../../model/cryptocurrency-collection.model';
import {Route} from '../../model/route.enum';

interface AppState {
  [ReducerName.CURRENCIES]: CryptocurrencyCollectionModel;
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
              private store: Store<AppState>,
              private router: Router) {
    this.subscribeEvents();
  }

  private subscribeEvents() {
    this.store.select(ReducerName.CURRENCIES)
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

  showDetails(cryptocurrency: Cryptocurrency) {
    this.store.dispatch(new CryptocurrencyActions.SelectCryptocurrency(cryptocurrency));
    this.router.navigate([Route.DETAILS]);
  }
}
