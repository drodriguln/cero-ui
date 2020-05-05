import { Action } from '../types';
import { DeckAction } from './actions';
import initialState from './initialState';

export type DeckStore = typeof initialState;

const deckReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case DeckAction.REMOVE_CARD:
      return [ ...state.slice(0, -1) ];
    default:
      return state;
  }
};

export default deckReducer;