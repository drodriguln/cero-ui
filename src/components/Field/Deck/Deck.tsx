import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';

import { selectDeck, selectTopCard } from '../../../store/deck/selector';
import Card from '../../Card';
import { removeCard as removeDeckCard, removeCards as removeDeckCards } from '../../../store/deck/actions';
import { addCard as addPlayerCard, addCards as addPlayerCards } from '../../../store/player/actions';

const useStyles = makeStyles({
  root: {
    cursor: 'pointer',
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  }
});

const Deck = () => {
  const dispatch = useDispatch();
  const deck = useSelector(selectDeck);
  const topCard = useSelector(selectTopCard)
  const classes = useStyles();

  const drawCard = () => {
    if (topCard === undefined) return;
    dispatch(addPlayerCard(Object.assign({}, topCard)))
    dispatch(removeDeckCard)
  }

  React.useEffect(() => {
    if (deck?.length < 8) return;
    dispatch(addPlayerCards(deck.slice(deck.length - 8, deck.length - 1)));
    dispatch(removeDeckCards(7));
  }, []);

  return <Card color='blue' value='0' size='lg' hidden className={classes.root} onClick={drawCard} />;
};

export default Deck;