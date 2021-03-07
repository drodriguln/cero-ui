import { Store } from '../../types';
import { useSelector } from 'react-redux';

export const usePlayer = () => {
  return useSelector((state: Store) => state.session.player);
}
