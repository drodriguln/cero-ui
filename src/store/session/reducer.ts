import { combineReducers } from 'redux';

import idReducer from './id/reducer';
import deckReducer from './deck/reducer';
import discardReducer from './discard/reducer';
import opponentReducer from './opponent/reducer';
import playerReducer from './player/reducer';
import { Action, Store } from "../types";
import { SessionAction } from "./actions";

const nestedReducers = combineReducers({
  id: idReducer,
  deck: deckReducer,
  discard: discardReducer,
  opponent: opponentReducer,
  player: playerReducer,
});

const reducer = (state = {} as Store, action: Action) => {
  if (action.type === SessionAction.SET_VALUE) {
    return action.payload;
  }
  return nestedReducers(state as any, action)
}


export default reducer;
