import {Action} from '../cryptocurrency.actions';
import {ActionName} from '../../model/action-name.enum';
import {CryptocurrencyCollectionModel} from '../../model/cryptocurrency-collection.model';

const defaultState: CryptocurrencyCollectionModel = {
  cryptocurrencies: [],
};

const newState = (state, newData) => Object.assign({}, state, newData);

export function cryptocurrenciesReducer(state: CryptocurrencyCollectionModel = defaultState, action: Action) {
  switch (action.type) {
    case ActionName.UPDATE_CURRENCIES:
      return newState(state, {cryptocurrencies: action.payload});
    default:
      return state;
  }
}
