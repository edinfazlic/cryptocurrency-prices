import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {mergeMap, withLatestFrom} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {Action, ChooseCryptocurrency, ReloadCryptocurrencyDetail, UpdateCurrencies} from '../cryptocurrency.actions';
import {ActionName} from '../../model/action-name.enum';
import {ReducerName} from '../../model/reducer-name.enum';
import {Constants} from '../../shared/constants';
import {CryptocurrencyService} from '../../service/cryptocurrency.service';
import {Store} from '@ngrx/store';
import {FiatStateModel} from '../../model/fiat-state.model';

interface AppState {
  [ReducerName.FIAT_CURRENCY_SELECTION]: FiatStateModel;
}

@Injectable()
export class ReloadCryptocurrencyDetailEffects {

  @Effect()
  reloadCryptocurrencyDetail$: Observable<Action> = this.actions$
    .pipe(
      ofType<ReloadCryptocurrencyDetail>(ActionName.RELOAD_CRYPTOCURRENCY_DETAILS),
      withLatestFrom(this.store$.select(ReducerName.FIAT_CURRENCY_SELECTION)),
      mergeMap(([action, latestFiatState]) => {
        return this.cryptocurrencyService.getTopNByFiat(Constants.FETCH_TOP, latestFiatState.currency)
          .pipe(
            withLatestFrom(this.store$.select(ReducerName.SELECTION)),
            mergeMap(([cryptocurrencies, selectedCryptocurrency]) => [
              new UpdateCurrencies(cryptocurrencies),
              new ChooseCryptocurrency({
                id: selectedCryptocurrency.id,
                cryptocurrencies: cryptocurrencies
              })
            ])
          );
      })
    );

  constructor(private actions$: Actions,
              private cryptocurrencyService: CryptocurrencyService,
              private store$: Store<AppState>) {
  }
}
