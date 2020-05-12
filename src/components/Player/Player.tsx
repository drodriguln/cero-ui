import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Slide } from '@material-ui/core';

import Hand from '../Hand';
import { playerSelector } from '../../store/player/selector';
import { CardData } from '../../store/types';
import { removePlayerCard, setPlayerActivity } from '../../store/player/actions';
import { addDiscardCard } from '../../store/discard/actions';
import { setOpponentActivity } from '../../store/opponent/actions';
import { discardTopCardSelector } from '../../store/discard/selector';

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
  const { cards, isActive } = useSelector(playerSelector)
  const topDiscardCard = useSelector(discardTopCardSelector);
  const classes = useStyles();
  const hasCards = cards?.length === 0;

  const placeCard = (card: CardData) => {
    if (topDiscardCard?.value !== card.value && topDiscardCard?.color !== card.color) {
      return;
    }

    dispatch(addDiscardCard(card));
    dispatch(removePlayerCard(card.id));
    dispatch(setPlayerActivity(false));
    dispatch(setOpponentActivity(true));
  }

  return (
    <Slide direction='up' timeout={600} in={!hasCards} exit={!hasCards}>
      <Hand
        cards={cards}
        onCardSelect={placeCard}
        isActive={isActive}
        className={classes.root}
      />
    </Slide>
  );
};

export default Player;