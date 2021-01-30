import { PlayerAction } from './actions';
import { Status } from '../../../enum';
import { Action } from '../../types';
import { CardData, Player } from '../../../types';

const initialState: Player = {
  cards: [] as CardData[],
  status: Status.INITIALIZE,
};

const playerReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case PlayerAction.SET_VALUE:
      return action.payload;
    case PlayerAction.SET_STATUS:
      return { ...state, status: action.payload };
    case PlayerAction.REMOVE_CARD:
      return { ...state, cards: state.cards.filter((card) => card.id !== action.payload.id) };
    default:
      return state;
  }
};

export default playerReducer;
