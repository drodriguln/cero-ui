import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../Card';
import { discardTopCardSelector } from '../../../store/discard/selector';
import { deckTopCardSelector } from '../../../store/deck/selector';
import { removeDeckCard } from '../../../store/deck/actions';
import { addDiscardCard } from '../../../store/discard/actions';

const Discard = () => {
  const dispatch = useDispatch();
  const discardCard = useSelector(discardTopCardSelector);
  const deckCard = useSelector(deckTopCardSelector)

  React.useEffect(() => {
    if (deckCard === undefined) return;
    dispatch(addDiscardCard(deckCard))
    dispatch(removeDeckCard)
  }, [])

  return discardCard !== undefined
    ? <Card color={discardCard.color} value={discardCard.value} size='lg' />
    : null;
};

export default Discard;