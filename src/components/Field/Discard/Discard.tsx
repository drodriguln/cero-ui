import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../Card';
import { selectTopCard as selectDiscardTopCard } from '../../../store/discard/selector';
import { selectTopCard as selectDeckTopCard } from '../../../store/deck/selector';
import { removeCard as removeDeckCard } from '../../../store/deck/actions';
import { addCard } from '../../../store/discard/actions';

const Discard = () => {
  const dispatch = useDispatch();
  const discardCard = useSelector(selectDiscardTopCard);
  const deckCard = useSelector(selectDeckTopCard)

  React.useEffect(() => {
    if (deckCard === undefined) return;
    dispatch(addCard(deckCard))
    dispatch(removeDeckCard)
  }, [])

  return discardCard !== undefined
    ? <Card color={discardCard.color} value={discardCard.value} size='lg' />
    : null;
};

export default Discard;