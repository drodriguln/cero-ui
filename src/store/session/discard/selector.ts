import { Store } from '../../types';
import { useSelector } from 'react-redux';

export const useDiscard = () => {
  return useSelector((state: Store) => state.session.discard);
}
