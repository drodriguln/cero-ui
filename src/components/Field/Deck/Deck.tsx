import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';

import Card from '../../Card';
import { playerSelector } from '../../../store/session/player/selector';

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
  const { activity: playerActivity } = useSelector(playerSelector);
  const classes = useStyles();

  const drawCard = () => {
    // Replace with draw API endpoint
    /*
    if (topDeckCard === undefined) return;
    dispatch(setPlayerActivity('draw'));
    dispatch(addPlayerCard(topDeckCard));
    dispatch(removeDeckCard());

     */
  };

  // Shuffle and move unused cards from discard pile into deck when it runs empty.
  /*
  useEffect(() => {
    if (deck?.cards?.length > 0 || discard?.length < 2) {
      return;
    }
    const unusedDiscardCards = discard?.cards?.slice(0, discard?.cards?.length - 1);
    const shuffledDiscardCards = shuffle(unusedDiscardCards, { copy: true });
    dispatch(addDeckCards(shuffledDiscardCards));
    dispatch(cleanDiscardCards());
  }, [deck?.cards?.length, discard?.cards?.length]);
*/
  return (
    <Card.Draw
      size="lg"
      className={classes.root}
      onClick={playerActivity === 'start' ? drawCard : undefined}
    />
  );
};

export default Deck;
