import { Action, CeroCard } from '../types';
import { DiscardAction } from './actions';

export type DiscardStore = typeof initialState;
const initialState = [] as CeroCard[];

const discardReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case DiscardAction.ADD_CARD:
      return [ ...state, action.payload ];
    default:
      return state;
  }
};

export default discardReducer;