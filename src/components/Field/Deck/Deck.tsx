import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';

import Card from '../../Card';
import { usePlayer } from '../../../store/session/player/selector';
import { useId } from '../../../store/session/id/selector';
import { setPlayer } from '../../../store/session/player/actions';
import { Player } from '../../../types';
import { PlayerStatus } from '../../../enum';

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

const drawCard = (sessionId: String): Promise<Player> => {
  const url = `/api/sessions/${sessionId}/draw`;
  return fetch(url, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json());
}

const Deck = () => {
  const dispatch = useDispatch();
  const sessionId = useId();
  const { status: playerStatus } = usePlayer();
  const classes = useStyles();

  const onClick = async () => {
    if (playerStatus !== PlayerStatus.START) {
      return;
    }

    const player = await drawCard(sessionId);
    dispatch(setPlayer(player));
  };

  return (
    <Card.Draw
      size="lg"
      className={classes.root}
      onClick={onClick}
    />
  );
};

export default Deck;
