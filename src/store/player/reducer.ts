import { Action, CeroCard } from '../types';
import { PlayerAction } from './actions';

export type PlayerStore = typeof initialState;
const initialState = {
  cards: [
    { id: 100, color: 'blue', value: '0' },
    { id: 101, color: 'green', value: '1' },
    { id: 102, color: 'red', value: '2' },
    { id: 103, color: 'yellow', value: '3' },
    { id: 104, color: 'blue', value: 'reverse' },
    { id: 105, color: 'green', value: 'skip' }
  ] as CeroCard[]
};

const playerReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case PlayerAction.ADD_CARD:
      return { ...state, cards: [ ...state.cards, action.payload ] };
    case PlayerAction.REMOVE_CARD:
      return { ...state, cards: [  ...state.cards.filter((card) => card.id !== action.payload.id) ] };
    default:
      return state;
  }
};

export default playerReducer;