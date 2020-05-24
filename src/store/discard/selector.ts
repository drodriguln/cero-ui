import { Store } from '../types';

export const discardSelector = (state: Store) => state.discard;
export const discardTopCardSelector = (state: Store) => (state.discard?.length > 0
  ? state.discard[state.discard.length - 1]
  : undefined);
