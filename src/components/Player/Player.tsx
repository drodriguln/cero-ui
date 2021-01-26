import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Slide } from '@material-ui/core';

import Hand from '../Hand';
import { CardData } from '../../store/types';
import { discardSelector } from '../../store/session/discard/selector';
import { playerSelector } from '../../store/session/player/selector';
import { opponentSelector } from '../../store/session/opponent/selector';
import { removePlayerCard, setPlayerActivity } from '../../store/session/player/actions';
import { setOpponentActivity } from '../../store/session/opponent/actions';
import { addDiscardCard } from '../../store/session/discard/actions';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

const Player = () => {
  const dispatch = useDispatch();
  const { cards, activity: playerActivity } = useSelector(playerSelector);
  const { activity: opponentActivity } = useSelector(opponentSelector);
  const discardCard = useSelector(discardSelector);
  const classes = useStyles();
  const hasCards = cards?.length !== 0;
  const hasGameEnded = opponentActivity === 'won' || playerActivity === 'won';

  const placeCard = (card: CardData) => {
    if (discardCard?.value !== card.value && discardCard?.color !== card.color) {
      return;
    }

    if (cards?.length === 1 && opponentActivity !== 'initialize') {
      dispatch(setPlayerActivity('won'));
      return;
    }

    dispatch(addDiscardCard(card));
    dispatch(removePlayerCard(card.id));
    dispatch(setPlayerActivity('end'));

    if (card.value === 'skip' || card.value === 'reverse') {
      dispatch(setOpponentActivity('skipped'));
    } else {
      /*
      updateSession(session)
        .then(() => {
          dispatch(setOpponentActivity('start'))
        });

       */
    }
  };

  useEffect(() => {
    if (playerActivity === 'skipped') {
      dispatch(setPlayerActivity('end'));
      /*
      updateSession(session)
        .then(() => {
          dispatch(setOpponentActivity('start'))
        });

       */
    } else if (playerActivity === 'draw') {
      dispatch(setPlayerActivity('start'));
    }
  }, [playerActivity]);

  return (
    <Slide
      direction="up"
      timeout={600}
      in={hasCards && !hasGameEnded}
      exit={!hasCards || hasGameEnded}
    >
      <Hand cards={cards} onCardSelect={placeCard} className={classes.root} type="player" />
    </Slide>
  );
};

export default Player;
