import { Action, Activity, CardData } from '../../types';
import { OpponentAction } from './actions';

const initialState = {
  cards: [] as CardData[],
  activity: 'initialize' as Activity,
};
export type OpponentStore = typeof initialState;

const opponentReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case OpponentAction.ADD_CARD:
      return { ...state, cards: [...state.cards, action.payload] };
    case OpponentAction.ADD_CARDS:
      return { ...state, cards: [...state.cards, ...action.payload] };
    case OpponentAction.REMOVE_CARD:
      return { ...state, cards: [...state.cards.filter((card) => card.id !== action.payload)] };
    case OpponentAction.SET_ACTIVITY:
      return { ...state, activity: action.payload };
    default:
      return state;
  }
};

export default opponentReducer;
