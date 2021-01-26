import { Action, CardData } from '../../types';
import { DeckAction } from './actions';

const initialState = {
  cards: [] as CardData[],
};
export type DeckStore = typeof initialState;

const deckReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case DeckAction.ADD_CARDS:
      return [...action.payload, ...state.cards];
    case DeckAction.REMOVE_CARD:
      return state.cards.slice(0, -1);
    case DeckAction.REMOVE_CARDS:
      if (state.cards.length < action.payload) {
        throw Error(`Cannot remove ${action.payload} items from state when only ${state.cards.length} exist.`);
      }
      return state.cards.slice(0, -1 * (action.payload + 1));
    default:
      return state;
  }
};

export default deckReducer;
