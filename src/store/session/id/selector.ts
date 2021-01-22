import { Store } from '../../types';

export const idSelector = (state: Store) => state.session.id;
