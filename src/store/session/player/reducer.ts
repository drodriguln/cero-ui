import { Action, Activity, CardData } from '../../types';
import { PlayerAction } from './actions';

const initialState = {
  cards: [] as CardData[],
  activity: 'initialize' as Activity,
};
export type Player = typeof initialState;

const playerReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case PlayerAction.SET_VALUE:
      return action.payload;
    case PlayerAction.SET_ACTIVITY:
      return { ...state, activity: action.payload };
    default:
      return state;
  }
};

export default playerReducer;
