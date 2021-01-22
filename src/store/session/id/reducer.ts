import { Action } from '../../types';
import { IdAction } from './actions';

const initialState = '';

export type IdStore = typeof initialState;

const idReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case IdAction.SET_VALUE:
      return action.payload;
    default:
      return state;
  }
};

export default idReducer;
