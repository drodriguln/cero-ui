import { combineReducers } from 'redux';

import idReducer from './id/reducer';
import discardReducer from './discard/reducer';
import opponentReducer from './opponent/reducer';
import playerReducer from './player/reducer';

const reducer = combineReducers({
  id: idReducer,
  discard: discardReducer,
  opponent: opponentReducer,
  player: playerReducer,
});

export default reducer;
