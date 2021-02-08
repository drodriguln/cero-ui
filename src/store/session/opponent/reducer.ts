import { OpponentAction } from './actions';
import { PlayerStatus } from '../../../enum';
import { Action } from '../../types';
import { CardData, Player } from '../../../types';

const initialState: Player = {
  cards: [] as CardData[],
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
