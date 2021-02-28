import { combineReducers } from 'redux';

import sessionReducer from './session/reducer';

const reducer = combineReducers({
  session: sessionReducer,
});

export default reducer;
