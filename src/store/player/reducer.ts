import { Action, CardData } from '../types';
import { PlayerAction } from './actions';

export type PlayerStore = typeof initialState;
const initialState = {
  cards: [
    { color: 'blue', value: '0' },
    { color: 'green', value: '1' },
    { color: 'red', value: '2' },
    { color: 'yellow', value: '3' },
    { color: 'blue', value: 'reverse' },
    { color: 'green', value: 'skip' }
  ] as CardData[]
};

const playerReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case PlayerAction.ADD_CARD:
      return { ...state, cards: [ ...state.cards, action.payload ] };
    default:
      return state;
  }
};

export default playerReducer;