import {Action} from '@ngrx/store';
import {ActionName} from '../model/action-name.enum';
import {Cryptocurrency} from '../model/cryptocurrency.model';
import {FiatCurrency} from '../model/fiat-currency.enum';

export class UpdateCurrencies implements Action {
  readonly type = ActionName.UPDATE_CURRENCIES;

  constructor(public payload: Cryptocurrency[]) {
  }
}

export class SelectCryptocurrency implements Action {
  readonly type = ActionName.SELECT_CRYPTOCURRENCY;

  constructor(public payload: Cryptocurrency) {
  }
}

export class SelectFiatCurrency implements Action {
  readonly type = ActionName.SELECT_FIAT_CURRENCY;

  constructor(public payload: FiatCurrency) {
  }
}

export class UpdateFiatCurrency implements Action {
  readonly type = ActionName.UPDATE_FIAT_CURRENCY;

  constructor(public payload: FiatCurrency) {
  }
}

export type Action
  = UpdateCurrencies
  | SelectCryptocurrency
  | SelectFiatCurrency
  | UpdateFiatCurrency;
