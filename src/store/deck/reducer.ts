import { Action } from '../types';
import { DeckAction } from './actions';
import initialState from './initialState';

export type DeckStore = typeof initialState;

const deckReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case DeckAction.ADD_CARDS:
      return [ ...action.payload, ...state ];
    case DeckAction.REMOVE_CARD:
      return state.slice(0, -1);
    case DeckAction.REMOVE_CARDS:
      if (state.length < action.payload) {
        throw Error(`Cannot remove ${action.payload} items from state when only ${state.length} exist.`);
      }
      return state.slice(0, -1 * (action.payload + 1));
    default:
      return state;
  }
};

export default deckReducer;