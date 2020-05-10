import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Slide } from '@material-ui/core';

import Hand from '../Hand';
import { playerSelector } from '../../store/player/selector';
import { CardData } from '../../store/types';
import { removePlayerCard } from '../../store/player/actions';
import { addDiscardCard } from '../../store/discard/actions';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  card: {
    cursor: 'pointer',
    transition: 'transform .1s ease-out',
    '&:hover': {
      transform: 'translateY(-15%)'
    }
  }
});

const Player = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector(playerSelector)
  const classes = useStyles();
  const hasCards = cards?.length === 0;

  const placeCard = (card: CardData) => {
    dispatch(addDiscardCard(card))
    dispatch(removePlayerCard(card.id))
  }

  return (
    <Slide direction='up' timeout={600} in={!hasCards} exit={!hasCards}>
      <Hand
        cards={cards}
        onCardSelect={placeCard}
        className={classes.root}
      />
    </Slide>
  );
};

export default Player;