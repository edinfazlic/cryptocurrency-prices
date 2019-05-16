import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {mergeMap, take} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {Action, LoadCryptocurrencies, ReloadCryptocurrencies} from './cryptocurrency.actions';
import {ActionName} from '../model/action-name.enum';

@Injectable()
export class LoadCryptocurrenciesEffects {

  @Effect()
  loadCryptocurrencies$: Observable<Action> = this.actions$
    .pipe(
      ofType<LoadCryptocurrencies>(ActionName.LOAD_CRYPTOCURRENCIES),
      take(1),
      mergeMap(() => [
        new ReloadCryptocurrencies()
      ])
    );

  constructor(private actions$: Actions) {
  }
}
