import { OpponentAction } from './actions';
import { PlayerStatus } from '../../../enum';
import { Action } from '../../types';
import { Opponent } from '../../../types';

const initialState: Opponent = {
  cardCount: 0,
  status: PlayerStatus.INITIALIZE,
};

const opponentReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case OpponentAction.SET_VALUE:
      return action.payload;
    default:
      return state;
  }
};

export default opponentReducer;
