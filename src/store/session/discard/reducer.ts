import { Action, CardData } from '../../types';
import { DiscardAction } from './actions';

const initialState = {
  cards: [] as CardData[],
};
export type DiscardStore = typeof initialState;

const discardReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case DiscardAction.ADD_CARD:
      return { ...state, cards: [ ...state.cards, action.payload ] };
    case DiscardAction.CLEAN:
      return state.cards.length > 0 ? state.cards.slice(state.cards.length - 1) : state;
    default:
      return state;
  }
};

export default discardReducer;
