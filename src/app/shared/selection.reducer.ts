import {Action} from './cryptocurrency.actions';
import {ActionName} from '../model/action-name.enum';
import {Cryptocurrency} from '../model/cryptocurrency.model';

const defaultState: Cryptocurrency = new Cryptocurrency();

const newState = (state, newData) => Object.assign({}, state, newData);

export function selectionReducer(state: Cryptocurrency = defaultState, action: Action) {
  switch (action.type) {
    case ActionName.SELECT_CRYPTOCURRENCY:
      return newState(state, action.payload);
    default:
      return state;
  }
}
