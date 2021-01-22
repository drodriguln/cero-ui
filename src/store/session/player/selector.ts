import { Store } from '../../types';

export const playerSelector = (state: Store) => state.session.player;
