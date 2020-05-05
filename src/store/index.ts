import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const initialState = {};
const enhancer = composeWithDevTools(applyMiddleware(reduxThunk));
const store = createStore(reducer, initialState, enhancer);

export default store;