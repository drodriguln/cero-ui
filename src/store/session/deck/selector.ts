import { Store } from '../../types';

export const deckSelector = (state: Store) => state.session.deck;
export const deckTopCardSelector = (state: Store) => (state.session.deck?.length > 0
  ? state.session.deck[state.session.deck.length - 1]
  : undefined);
