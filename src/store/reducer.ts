import { combineReducers } from 'redux';

import deckReducer from './deck/reducer';
import discardReducer from './discard/reducer';
import playerReducer from './player/reducer';

const reducer = combineReducers({
  deck: deckReducer,
  discard: discardReducer,
  player: playerReducer
});

export default reducer;