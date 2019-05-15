import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {CryptocurrencyService} from '../service/cryptocurrency.service';
import {Action, SelectFiatCurrency, UpdateCurrencies, UpdateFiatCurrency} from './cryptocurrency.actions';
import {Cryptocurrency} from '../model/cryptocurrency.model';
import {ActionName} from '../model/action-name.enum';
import {Store} from '@ngrx/store';
import {ReducerName} from '../model/reducer-name.enum';
import {FiatStateModel} from '../model/fiat-state.model';
import {FiatCurrency} from '../model/fiat-currency.enum';

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
        return this.cryptocurrencyService.getTopNByFiat(100, payload).pipe(
          mergeMap((data: Cryptocurrency[]) => [
            new UpdateCurrencies(data),
            new UpdateFiatCurrency(payload)
          ])
        );
      }),
    );

  constructor(private actions$: Actions,
              private cryptocurrencyService: CryptocurrencyService,
              private store$: Store<AppState>) {
  }
}
