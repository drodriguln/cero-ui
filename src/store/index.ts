import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const initialState = {};
const enhancer = composeWithDevTools();
const store = createStore(reducer, initialState, enhancer);

export default store;
