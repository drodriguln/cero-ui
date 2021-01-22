import { Action, CardData } from '../../types';
import { DiscardAction } from './actions';

const initialState = [] as CardData[];
export type DiscardStore = typeof initialState;

const discardReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case DiscardAction.ADD_CARD:
      return [...state, action.payload];
    case DiscardAction.CLEAN:
      return state.length > 0 ? state.slice(state.length - 1) : state;
    default:
      return state;
  }
};

export default discardReducer;
