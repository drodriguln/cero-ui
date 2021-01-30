import { Action, CardData } from '../../types';
import { DiscardAction } from './actions';

const initialState = {} as CardData;
export type Discard = typeof initialState;

const discardReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case DiscardAction.SET_VALUE:
      return action.payload;
    default:
      return state;
  }
};

export default discardReducer;
