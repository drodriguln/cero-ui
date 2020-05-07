import { Action, CardData } from '../types';
import { DiscardAction } from './actions';

export type DiscardStore = typeof initialState;
const initialState = [] as CardData[];

const discardReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case DiscardAction.ADD_CARD:
      return [ ...state, action.payload ];
    default:
      return state;
  }
};

export default discardReducer;