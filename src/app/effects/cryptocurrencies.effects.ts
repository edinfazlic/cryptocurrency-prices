import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {CryptocurrencyService} from '../service/cryptocurrency.service';
import {Action, ChooseCryptocurrency, SelectFiatCurrency, UpdateCurrencies, UpdateFiatCurrency} from '../shared/cryptocurrency.actions';
import {ActionName} from '../model/action-name.enum';
import {ReducerName} from '../model/reducer-name.enum';
import {FiatStateModel} from '../model/fiat-state.model';
import {FiatCurrency} from '../model/fiat-currency.enum';
import {Constants} from '../shared/constants';

interface AppState {
  [ReducerName.FIAT_CURRENCY_SELECTION]: FiatStateModel;
}

@Injectable()
export class CryptocurrencyEffects {

  @Effect()
  fetchCryptocurrencies$: Observable<Action> = this.actions$
    .pipe(
      ofType<SelectFiatCurrency>(ActionName.SELECT_FIAT_CURRENCY),
      withLatestFrom(this.store$.select(ReducerName.FIAT_CURRENCY_SELECTION)),
      filter(([action, latestFiatState]) => latestFiatState.currency !== action.payload),
      map(([action]) => action.payload),
      mergeMap((payload: FiatCurrency) => {
        return this.cryptocurrencyService.getTopNByFiat(Constants.FETCH_TOP, payload)
          .pipe(
            withLatestFrom(this.store$.select(ReducerName.SELECTION)),
            mergeMap(([cryptocurrencies, selectedCryptocurrency]) => [
              new UpdateCurrencies(cryptocurrencies),
              new UpdateFiatCurrency(payload),
              new ChooseCryptocurrency({
                id: selectedCryptocurrency.id,
                cryptocurrencies: cryptocurrencies
              })
            ])
          );
      }),
    );

  constructor(private actions$: Actions,
              private cryptocurrencyService: CryptocurrencyService,
              private store$: Store<AppState>) {
  }
}
