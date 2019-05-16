import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ReducerName} from '../../model/reducer-name.enum';
import {Cryptocurrency} from '../../model/cryptocurrency.model';
import {FiatStateModel} from '../../model/fiat-state.model';
import * as Action from '../../store/cryptocurrency.actions';

interface AppState {
  [ReducerName.SELECTION]: Cryptocurrency;
  [ReducerName.FIAT_CURRENCY_SELECTION]: FiatStateModel;
}

@Component({
  selector: 'app-cryptocurrency-details',
  templateUrl: './cryptocurrency-details.component.html',
  styleUrls: ['./cryptocurrency-details.component.scss']
})
export class CryptocurrencyDetailsComponent {

  cryptocurrency$: Observable<Cryptocurrency>;
  fiatState$: Observable<FiatStateModel>;

  constructor(private store$: Store<AppState>) {
    this.cryptocurrency$ = this.store$.select(ReducerName.SELECTION);
    this.fiatState$ = this.store$.select(ReducerName.FIAT_CURRENCY_SELECTION);
  }

  refresh() {
    this.store$.dispatch(new Action.ReloadCryptocurrencyDetail());
  }
}
