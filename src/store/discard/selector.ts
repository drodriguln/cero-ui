import { Store } from '../types';

export const selectDiscard = (state: Store) => state.discard;
export const selectTopCard = (state: Store) => state.discard?.length > 0 ? state.deck[state.discard.length - 1] : undefined;