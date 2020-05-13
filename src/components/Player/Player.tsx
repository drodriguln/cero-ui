import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Slide } from '@material-ui/core';

import Hand from '../Hand';
import { CardData } from '../../store/types';
import { discardTopCardSelector } from '../../store/discard/selector';
import { playerSelector } from '../../store/player/selector';
import { opponentSelector } from '../../store/opponent/selector';
import { removePlayerCard, setPlayerActivity } from '../../store/player/actions';
import { setOpponentActivity } from '../../store/opponent/actions';
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
  const { cards, activity } = useSelector(playerSelector)
  const { activity: opponentActivity } = useSelector(opponentSelector);
  const topDiscardCard = useSelector(discardTopCardSelector);
  const classes = useStyles();
  const hasCards = cards?.length === 0;

  React.useEffect(() => {
    if (opponentActivity === 'finish') {
      dispatch(setPlayerActivity('start'));
    }
  }, [opponentActivity]);

  React.useEffect(() => {
    if (activity === 'skipped') {
      dispatch(setPlayerActivity('finish'));
    } else if (activity === 'draw') {
      dispatch(setPlayerActivity('start'));
    }
  }, [activity]);

  const placeCard = (card: CardData) => {
    if (topDiscardCard?.value !== card.value && topDiscardCard?.color !== card.color) {
      return;
    }

    dispatch(addDiscardCard(card));
    dispatch(removePlayerCard(card.id));
    if (card.value === 'skip' || card.value === 'reverse') {
      dispatch(setOpponentActivity('skipped'));
    }
    dispatch(setPlayerActivity('finish'));
  }

  return (
    <Slide direction='up' timeout={600} in={!hasCards} exit={!hasCards}>
      <Hand
        cards={cards}
        onCardSelect={placeCard}
        isActive={activity !== 'finish'}
        className={classes.root}
      />
    </Slide>
  );
};

export default Player;