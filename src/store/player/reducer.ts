import { Action, CeroCard } from '../types';
import { PlayerAction } from './actions';

export type PlayerStore = typeof initialState;
const initialState = {
  cards: [] as CeroCard[]
};

const playerReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case PlayerAction.ADD_CARD:
      return { ...state, cards: [ ...state.cards, action.payload ] };
    case PlayerAction.ADD_CARDS:
      return { ...state, cards: [ ...state.cards, ...action.payload ] };
    case PlayerAction.REMOVE_CARD:
      return { ...state, cards: [  ...state.cards.filter((card) => card.id !== action.payload.id) ] };
    default:
      return state;
  }
};

export default playerReducer;