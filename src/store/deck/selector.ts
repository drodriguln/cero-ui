import { Store } from '../types';

export const selectDeck = (state: Store) => state.deck;
export const selectTopCard = (state: Store) => state.deck?.length > 0 ? state.deck[state.deck.length - 1] : undefined;