import {Actions} from './cryptocurrency.actions';
import ActionNames from '../model/action-names';
import {CryptocurrencyCollectionModel} from '../model/cryptocurrency-collection.model';

// default app state
const defaultState: CryptocurrencyCollectionModel = {
  cryptocurrencies: [],
};

// helper function to create new state object
const newState = (state, newData) => Object.assign({}, state, newData);

// reducer function
export function cryptocurrencyReducer(state: CryptocurrencyCollectionModel = defaultState, action: Actions) {
  switch (action.type) {
    case ActionNames.FETCH_CURRENCIES:
      return newState(state, {cryptocurrencies: action.payload});
    default:
      return state;
  }
}
