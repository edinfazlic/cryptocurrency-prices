import {Action} from '@ngrx/store';
import ActionNames from '../model/action-names';
import {Cryptocurrency} from '../model/cryptocurrency.model';

export class FetchCurrencies implements Action {
  readonly type = ActionNames.FETCH_CURRENCIES;

  constructor(public payload: Cryptocurrency[]) {
  }
}

export type Actions
  = FetchCurrencies;
