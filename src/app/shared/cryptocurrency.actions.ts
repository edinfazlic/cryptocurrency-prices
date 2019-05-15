import {Action} from '@ngrx/store';
import {ActionName} from '../model/action-name.enum';
import {Cryptocurrency} from '../model/cryptocurrency.model';

export class FetchCurrencies implements Action {
  readonly type = ActionName.FETCH_CURRENCIES;

  constructor(public payload: Cryptocurrency[]) {
  }
}

export class SelectCryptocurrency implements Action {
  readonly type = ActionName.SELECT_CRYPTOCURRENCY;

  constructor(public payload: Cryptocurrency) {
  }
}

export type Actions
  = FetchCurrencies
  | SelectCryptocurrency;
