import { Store } from '../../types';

export const discardSelector = (state: Store) => state.session.discard;
export const discardTopCardSelector = (state: Store) => (state.session.discard?.cards?.length > 0
  ? state.session.discard.cards[state.session.discard.cards.length - 1]
  : undefined);
