import { Action, CardData } from '../types';
import { DeckAction } from './actions';

export type DeckStore = typeof initialState;
const initialState: CardData[] = [
  { color: 'blue', value: '0' },
  { color: 'green', value: '1' },
  { color: 'red', value: '2' },
  { color: 'yellow', value: '3' },
  { color: 'blue', value: 'reverse' },
  { color: 'green', value: 'skip' }
];

const deckReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case DeckAction.REMOVE_CARD:
      return [ ...state.slice(0, -1) ];
    default:
      return state;
  }
};

export default deckReducer;