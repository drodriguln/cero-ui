import { combineReducers } from 'redux';

import discardReducer from './discard/reducer';
import opponentReducer from './opponent/reducer';
import playerReducer from './player/reducer';

const reducer = combineReducers({
  discard: discardReducer,
  opponent: opponentReducer,
  player: playerReducer,
});

export default reducer;
