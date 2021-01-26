import { Store } from '../../types';

export const playerSelector = (state: Store) => {
    return state.session.player;
};
