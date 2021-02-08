import { Store } from '../../types';
import { useSelector } from 'react-redux';

export const useId = () => {
  return useSelector((state: Store) => state.session.id);
}