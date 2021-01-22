import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../Card';
import { discardTopCardSelector } from '../../../store/session/discard/selector';
import { deckTopCardSelector } from '../../../store/session/deck/selector';
import { removeDeckCard } from '../../../store/session/deck/actions';
import { addDiscardCard } from '../../../store/session/discard/actions';

const Discard = () => {
  const dispatch = useDispatch();
  const discardCard = useSelector(discardTopCardSelector);
  const deckCard = useSelector(deckTopCardSelector);

  useEffect(() => {
    if (deckCard === undefined) return;
    dispatch(addDiscardCard(deckCard));
    dispatch(removeDeckCard);
  }, []);

  return discardCard !== undefined
    ? <Card color={discardCard.color} value={discardCard.value} size="lg" />
    : null;
};

export default Discard;
