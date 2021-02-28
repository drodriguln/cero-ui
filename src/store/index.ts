import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducer';
import { Store } from './types';

const initialState = {} as Store;
const enhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(reducer, initialState, enhancer);

export default store;
