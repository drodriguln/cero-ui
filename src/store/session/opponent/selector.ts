import { Store } from '../../types';

export const opponentSelector = (state: Store) => state.session.opponent;
