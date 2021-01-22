import { combineReducers } from 'redux';

import idReducer from './id/reducer';
import deckReducer from './deck/reducer';
import discardReducer from './discard/reducer';
import opponentReducer from './opponent/reducer';
import playerReducer from './player/reducer';

const reducer = combineReducers({
  id: idReducer,
  deck: deckReducer,
  discard: discardReducer,
  opponent: opponentReducer,
  player: playerReducer,
});

export default reducer;
