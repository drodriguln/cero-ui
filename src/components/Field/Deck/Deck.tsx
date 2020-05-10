import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';

import { deckSelector, deckTopCardSelector } from '../../../store/deck/selector';
import Card from '../../Card';
import { removeDeckCard, removeDeckCards } from '../../../store/deck/actions';
import { addPlayerCard, addPlayerCards } from '../../../store/player/actions';
import { addOpponentCards } from '../../../store/opponent/actions';

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
  const deck = useSelector(deckSelector);
  const topCard = useSelector(deckTopCardSelector)
  const classes = useStyles();

  const drawCard = () => {
    if (topCard === undefined) return;
    dispatch(addPlayerCard(topCard))
    dispatch(removeDeckCard)
  }

  React.useEffect(() => {
    if (deck?.length < 8) return;
    dispatch(addPlayerCards(deck.slice(deck.length - 8, deck.length - 1)));
    dispatch(addOpponentCards(deck.slice(deck.length - 16, deck.length - 9)));
    dispatch(removeDeckCards(14));
  }, []);

  return <Card.Draw size='lg' className={classes.root} onClick={drawCard} />;
};

export default Deck;