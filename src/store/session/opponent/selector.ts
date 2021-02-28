import { Store } from '../../types';
import { useSelector } from 'react-redux';

export const useOpponent = () => {
  return useSelector((state: Store) => state.session.opponent);
}
