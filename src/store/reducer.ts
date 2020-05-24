import { combineReducers } from 'redux';

import deckReducer from './deck/reducer';
import discardReducer from './discard/reducer';
import opponentReducer from './opponent/reducer';
import playerReducer from './player/reducer';

const reducer = combineReducers({
  deck: deckReducer,
  discard: discardReducer,
  opponent: opponentReducer,
  player: playerReducer,
});

export default reducer;
