import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Slide } from '@material-ui/core';

import Hand from '../Hand';
import { CardData, SessionStore } from '../../store/types';
import { discardTopCardSelector } from '../../store/session/discard/selector';
import { playerSelector } from '../../store/session/player/selector';
import { opponentSelector } from '../../store/session/opponent/selector';
import { removePlayerCard, setPlayerActivity } from '../../store/session/player/actions';
import { setOpponentActivity } from '../../store/session/opponent/actions';
import { addDiscardCard } from '../../store/session/discard/actions';
import { setId } from '../../store/session/id/actions';
import { sessionSelector } from '../../store/session/selector';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

const Player = () => {
  const dispatch = useDispatch();
  const session = useSelector(sessionSelector);
  const { cards, activity: playerActivity } = useSelector(playerSelector);
  const { activity: opponentActivity } = useSelector(opponentSelector);
  const topDiscardCard = useSelector(discardTopCardSelector);
  const classes = useStyles();
  const hasCards = cards?.length !== 0;
  const hasGameEnded = opponentActivity === 'won' || playerActivity === 'won';

  const placeCard = (card: CardData) => {
    if (topDiscardCard?.value !== card.value && topDiscardCard?.color !== card.color) {
      return;
    }

    if (cards?.length === 1 && opponentActivity !== 'initialize') {
      dispatch(setPlayerActivity('won'));
      return;
    }

    const doSkipOpponent = card.value === 'skip' || card.value === 'reverse';
    dispatch(addDiscardCard(card));
    dispatch(removePlayerCard(card.id));
    dispatch(setPlayerActivity('end'));
    dispatch(setOpponentActivity(doSkipOpponent ? 'skipped' : 'start'));
  };

  useEffect(() => {
    fetch('http://localhost:8080/session', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(session),
    })
      .then((response) => response.json())
      .then((session: SessionStore) => dispatch(setId(session.id)));
  }, []);

  useEffect(() => {
    if (playerActivity === 'skipped') {
      dispatch(setPlayerActivity('end'));
      dispatch(setOpponentActivity('start'));
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
