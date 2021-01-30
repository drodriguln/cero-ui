import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';

import Card from '../../Card';
import { playerSelector } from '../../../store/session/player/selector';
import { idSelector } from '../../../store/session/id/selector';
import { setPlayer } from '../../../store/session/player/actions';
import { Player } from '../../../types';
import { Status } from '../../../enum';

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

const drawCard = (sessionId: String, playerId: String): Promise<Player> => {
  const url = `http://localhost:8080/session/${sessionId}/player/${playerId}/draw`;
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
  const sessionId = useSelector(idSelector);
  const { status: playerStatus } = useSelector(playerSelector);
  const classes = useStyles();

  const onClick = async () => {
    if (playerStatus !== Status.START) {
      return;
    }

    const player = await drawCard(sessionId, 'player');
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
