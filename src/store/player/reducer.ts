import { Action, Activity, CardData } from '../types';
import { PlayerAction } from './actions';

const initialState = {
  cards: [] as CardData[],
  activity: 'initialize' as Activity,
};
export type PlayerStore = typeof initialState;

const playerReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case PlayerAction.ADD_CARD:
      return { ...state, cards: [...state.cards, action.payload] };
    case PlayerAction.ADD_CARDS:
      return { ...state, cards: [...state.cards, ...action.payload] };
    case PlayerAction.REMOVE_CARD:
      return { ...state, cards: [...state.cards.filter((card) => card.id !== action.payload)] };
    case PlayerAction.SET_ACTIVITY:
      return { ...state, activity: action.payload };
    default:
      return state;
  }
};

export default playerReducer;
