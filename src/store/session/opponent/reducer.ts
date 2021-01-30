import { Action, Activity, CardData } from '../../types';
import { OpponentAction } from './actions';

const initialState = {
  cards: [] as CardData[],
  activity: 'initialize' as Activity,
};
export type Opponent = typeof initialState;

const opponentReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case OpponentAction.SET_VALUE:
      return action.payload;
    default:
      return state;
  }
};

export default opponentReducer;
