import {Actions} from './cryptocurrency.actions';
import {ActionName} from '../model/action-name.enum';
import {Cryptocurrency} from '../model/cryptocurrency.model';

// default app state
const defaultState: Cryptocurrency = new Cryptocurrency();

// helper function to create new state object
const newState = (state, newData) => Object.assign({}, state, newData);

// reducer function
export function selectionReducer(state: Cryptocurrency = defaultState, action: Actions) {
  switch (action.type) {
    case ActionName.SELECT_CRYPTOCURRENCY:
      return newState(state, action.payload);
    default:
      return state;
  }
}
