import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {mergeMap, withLatestFrom} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {CryptocurrencyService} from '../service/cryptocurrency.service';
import {Action, ReloadCryptocurrencies, UpdateCurrencies} from '../shared/cryptocurrency.actions';
import {Cryptocurrency} from '../model/cryptocurrency.model';
import {ActionName} from '../model/action-name.enum';
import {ReducerName} from '../model/reducer-name.enum';
import {FiatStateModel} from '../model/fiat-state.model';
import {Constants} from '../shared/constants';

interface AppState {
  [ReducerName.FIAT_CURRENCY_SELECTION]: FiatStateModel;
}

@Injectable()
export class ReloadCryptocurrencyEffects {

  @Effect()
  reloadCryptocurrencies$: Observable<Action> = this.actions$
    .pipe(
      ofType<ReloadCryptocurrencies>(ActionName.RELOAD_CRYPTOCURRENCIES),
      withLatestFrom(this.store$.select(ReducerName.FIAT_CURRENCY_SELECTION)),
      mergeMap(([action, latestFiatState]) => this.cryptocurrencyService.getTopNByFiat(Constants.FETCH_TOP, latestFiatState.currency)),
      mergeMap((data: Cryptocurrency[]) => [
        new UpdateCurrencies(data)
      ])
    );

  constructor(private actions$: Actions,
              private cryptocurrencyService: CryptocurrencyService,
              private store$: Store<AppState>) {
  }
}
