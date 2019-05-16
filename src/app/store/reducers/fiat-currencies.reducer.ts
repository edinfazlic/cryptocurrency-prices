import {Action} from '../cryptocurrency.actions';
import {ActionName} from '../../model/action-name.enum';
import {FiatCurrency} from '../../model/fiat-currency.enum';
import {FiatStateModel} from '../../model/fiat-state.model';

const defaultState: FiatStateModel = {
  currency: FiatCurrency.USD
};

const newState = (state, newData) => Object.assign({}, state, newData);

export function fiatCurrenciesReducer(state: FiatStateModel = defaultState, action: Action) {
  switch (action.type) {
    case ActionName.UPDATE_FIAT_CURRENCY:
      if (state.currency === action.payload) {
        return state;
      }
      return newState(state, {currency: action.payload});
    default:
      return state;
  }
}
