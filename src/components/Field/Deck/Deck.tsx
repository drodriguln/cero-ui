import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shuffle from 'shuffle-array';
import { makeStyles } from '@material-ui/core';

import Card from '../../Card';
import { deckSelector, deckTopCardSelector } from '../../../store/session/deck/selector';
import { discardSelector } from '../../../store/session/discard/selector';
import { playerSelector } from '../../../store/session/player/selector';
import { addDeckCards, removeDeckCard } from '../../../store/session/deck/actions';
import { cleanDiscardCards } from '../../../store/session/discard/actions';
import { addPlayerCard, setPlayerActivity } from '../../../store/session/player/actions';

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
    dispatch(removeDeckCard());
  };

  // Shuffle and move unused cards from discard pile into deck when it runs empty.
  useEffect(() => {
    if (deck?.cards?.length > 0 || discard?.cards?.length < 2) {
      return;
    }
    const unusedDiscardCards = discard?.cards?.slice(0, discard?.cards?.length - 1);
    const shuffledDiscardCards = shuffle(unusedDiscardCards, { copy: true });
    dispatch(addDeckCards(shuffledDiscardCards));
    dispatch(cleanDiscardCards());
  }, [deck?.cards?.length, discard?.cards?.length]);

  return (
    <Card.Draw
      size="lg"
      className={classes.root}
      onClick={playerActivity === 'start' ? drawCard : undefined}
    />
  );
};

export default Deck;
