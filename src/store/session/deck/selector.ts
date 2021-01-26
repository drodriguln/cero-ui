import { Store } from '../../types';

export const deckSelector = (state: Store) => state.session.deck;
export const deckTopCardSelector = (state: Store) => (state.session.deck?.cards?.length > 0
  ? state.session.deck.cards[state.session.deck.cards.length - 1]
  : undefined);
