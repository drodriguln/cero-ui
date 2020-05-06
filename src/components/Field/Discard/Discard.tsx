import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../Card';
import { selectTopCard } from '../../../store/discard/selector';
import { selectDeck } from '../../../store/deck/selector';
import { removeCard as removeDeckCard } from '../../../store/deck/actions';
import { addCard } from '../../../store/discard/actions';

const Discard = () => {
  const dispatch = useDispatch();
  const card = useSelector(selectTopCard);
  const deck = useSelector(selectDeck)

  React.useEffect(() => {
    const [ topDeckCard ] = deck?.slice(-1);
    if (topDeckCard === undefined) return;
    dispatch(removeDeckCard)
    dispatch(addCard(topDeckCard))
  }, [])

  return card !== undefined
    ? <Card color={card.color} value={card.value} size='lg' />
    : null;
};

export default Discard;