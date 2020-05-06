import { Store } from '../types';

export const selectDiscard = (state: Store) => state.discard;
export const selectTopCard = (state: Store) => state.discard[state.discard.length - 1];