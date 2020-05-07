import { Store } from '../types';

export const deckSelector = (state: Store) => state.deck;
export const deckTopCardSelector = (state: Store) => state.deck?.length > 0
  ? state.deck[state.deck.length - 1]
  : undefined;