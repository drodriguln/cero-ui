import { Action } from '../../types';
import { IdAction } from './actions';

const initialState = '';

const idReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case IdAction.SET_VALUE:
      return action.payload;
    default:
      return state;
  }
};

export default idReducer;
