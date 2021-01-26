import { Store } from '../../types';

export const discardSelector = (state: Store) => state.session.discard;
