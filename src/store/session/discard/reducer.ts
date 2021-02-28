import { Action } from '../../types';
import { Discard } from '../../../types';
import { DiscardAction } from './actions';

const initialState = {} as Discard;

const discardReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case DiscardAction.SET_VALUE:
      return action.payload;
    default:
      return state;
  }
};

export default discardReducer;
