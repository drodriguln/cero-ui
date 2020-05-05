import { combineReducers } from 'redux';

import deckReducer from './deck/reducer';
import playerReducer from './player/reducer';

const reducer = combineReducers({
  deck: deckReducer,
  player: playerReducer
});

export default reducer;