import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Slide } from '@material-ui/core';

import Hand from '../Hand';
import { idSelector } from '../../store/session/id/selector';
import { discardSelector } from '../../store/session/discard/selector';
import { playerSelector } from '../../store/session/player/selector';
import { opponentSelector } from '../../store/session/opponent/selector';
import { removePlayerCard, setPlayerStatus } from '../../store/session/player/actions';
import { setSession } from '../../store/session/actions';
import { setDiscard } from '../../store/session/discard/actions';
import { Status } from '../../enum';
import { CardData, Session } from '../../types';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

const executeTurn = (sessionId: String, playerId: String, card: CardData): Promise<Session> => {
  const url = `http://localhost:8080/session/${sessionId}/player/${playerId}/discard`;
  return fetch(url, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(card),
  })
    .then((response) => response.json());
}

const Player = () => {
  const dispatch = useDispatch();
  const sessionId = useSelector(idSelector);
  const { cards, status: playerStatus } = useSelector(playerSelector);
  const { status: opponentStatus } = useSelector(opponentSelector);
  const discard = useSelector(discardSelector);
  const classes = useStyles();
  const hasCards = cards?.length !== 0;
  const hasGameEnded = opponentStatus === Status.WON || playerStatus === Status.WON;

  const onSelect = async (card: CardData) => {
    if (discard.value !== card.value && discard.color !== card.color) {
      return;
    }

    // Set card temporarily so another card can't be placed while the API updates the session
    dispatch(setPlayerStatus(Status.END));
    dispatch(removePlayerCard(card));
    dispatch(setDiscard(card));

    const session = await executeTurn(sessionId, 'player', card);
    setSession(dispatch, session);
  };

  return (
    <Slide
      direction="up"
      timeout={600}
      in={hasCards && !hasGameEnded}
      exit={!hasCards || hasGameEnded}
    >
      <Hand
        cards={cards}
        onCardSelect={onSelect}
        className={classes.root}
        type="player"
      />
    </Slide>
  );
};

export default Player;
