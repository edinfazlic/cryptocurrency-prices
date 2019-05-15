import {Actions} from './cryptocurrency.actions';
import {ActionName} from '../model/action-name.enum';
import {CryptocurrencyCollectionModel} from '../model/cryptocurrency-collection.model';

// default app state
const defaultState: CryptocurrencyCollectionModel = {
  cryptocurrencies: [],
};

// helper function to create new state object
const newState = (state, newData) => Object.assign({}, state, newData);

// reducer function
export function cryptocurrenciesReducer(state: CryptocurrencyCollectionModel = defaultState, action: Actions) {
  switch (action.type) {
    case ActionName.FETCH_CURRENCIES:
      return newState(state, {cryptocurrencies: action.payload});
    default:
      return state;
  }
}
