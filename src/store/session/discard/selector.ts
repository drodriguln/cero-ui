import { Store } from '../../types';

export const discardSelector = (state: Store) => state.session.discard;
export const discardTopCardSelector = (state: Store) => (state.session.discard?.length > 0
  ? state.session.discard[state.session.discard.length - 1]
  : undefined);
