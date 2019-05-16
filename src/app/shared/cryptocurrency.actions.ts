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

export class ChooseCryptocurrency implements Action {
  readonly type = ActionName.CHOOSE_CRYPTOCURRENCY;

  constructor(public payload: { id: number, cryptocurrencies: Cryptocurrency[] }) {
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

export class ReloadCryptocurrencies implements Action {
  readonly type = ActionName.RELOAD_CRYPTOCURRENCIES;
}

export class LoadCryptocurrencies implements Action {
  readonly type = ActionName.LOAD_CRYPTOCURRENCIES;
}

export class ReloadCryptocurrencyDetail implements Action {
  readonly type = ActionName.RELOAD_CRYPTOCURRENCY_DETAILS;
}
export type Action
  = UpdateCurrencies
  | SelectCryptocurrency
  | ChooseCryptocurrency
  | SelectFiatCurrency
  | UpdateFiatCurrency
  | ReloadCryptocurrencies
  | LoadCryptocurrencies;
