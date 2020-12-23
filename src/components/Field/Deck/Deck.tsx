import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shuffle from 'shuffle-array';
import { makeStyles } from '@material-ui/core';

import Card from '../../Card';
import { deckSelector, deckTopCardSelector } from '../../../store/deck/selector';
import { discardSelector } from '../../../store/discard/selector';
import { playerSelector } from '../../../store/player/selector';
import { addDeckCards, removeDeckCard, removeDeckCards } from '../../../store/deck/actions';
import { cleanDiscardCards } from '../../../store/discard/actions';
import { addPlayerCard, addPlayerCards, setPlayerActivity } from '../../../store/player/actions';
import { addOpponentCards, setOpponentActivity } from '../../../store/opponent/actions';

const useStyles = makeStyles({
  root: {
    cursor: 'pointer',
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    '&:active': {
      transform: 'scale(0.95)',
    },
  },
});

const Deck = () => {
  const dispatch = useDispatch();
  const deck = useSelector(deckSelector);
  const discard = useSelector(discardSelector);
  const { activity: playerActivity } = useSelector(playerSelector);
  const topDeckCard = useSelector(deckTopCardSelector);
  const classes = useStyles();

  const drawCard = () => {
    if (topDeckCard === undefined) return;
    dispatch(setPlayerActivity('draw'));
    dispatch(addPlayerCard(topDeckCard));
    dispatch(removeDeckCard);
  };

  useEffect(() => {
    if (deck?.length < 8) return;
    dispatch(addPlayerCards(deck.slice(deck.length - 8, deck.length - 1)));
    dispatch(addOpponentCards(deck.slice(deck.length - 16, deck.length - 9)));
    dispatch(removeDeckCards(14));
    dispatch(setPlayerActivity('start'));
    dispatch(setOpponentActivity('end'));
  }, []);

  // Shuffle and move unused cards from discard pile into deck when it runs empty.
  useEffect(() => {
    if (deck?.length > 0 || discard?.length < 2) {
      return;
    }
    const unusedDiscardCards = discard.slice(0, discard.length - 1);
    const shuffledDiscardCards = shuffle(unusedDiscardCards, { copy: true });
    dispatch(addDeckCards(shuffledDiscardCards));
    dispatch(cleanDiscardCards());
  }, [deck?.length, discard?.length]);

  return (
    <Card.Draw
      size="lg"
      className={classes.root}
      onClick={playerActivity === 'start' ? drawCard : undefined}
    />
  );
};

export default Deck;
