import React from 'react';
import { useDispatch } from 'react-redux';
import { Slide } from '@material-ui/core';

import { useId } from '../../store/session/id/selector';
import { useDiscard } from '../../store/session/discard/selector';
import { usePlayer } from '../../store/session/player/selector';
import { useOpponent } from '../../store/session/opponent/selector';
import { removePlayerCard, setPlayerStatus } from '../../store/session/player/actions';
import { setSession } from '../../store/session/actions';
import { setDiscard } from '../../store/session/discard/actions';
import { PlayerStatus } from '../../enum';
import { CardData, Session } from '../../types';
import PlayerHand from './PlayerHand';

const executeTurn = (sessionId: String, card: CardData): Promise<Session> => {
  const url = `/api/sessions/${sessionId}/discard`;
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
  const sessionId = useId();
  const { cards, status: playerStatus } = usePlayer();
  const { status: opponentStatus } = useOpponent();
  const discard = useDiscard();
  const hasCards = cards?.length !== 0;
  const hasGameEnded = opponentStatus === PlayerStatus.WON || playerStatus === PlayerStatus.WON;

  const onSelect = async (card: CardData) => {
    if (discard.value !== card.value && discard.color !== card.color) {
      return;
    }

    // Set card temporarily so another card can't be placed while the API updates the session
    dispatch(setPlayerStatus(PlayerStatus.END));
    dispatch(removePlayerCard(card));
    dispatch(setDiscard(card));

    const session = await executeTurn(sessionId, card);
    setSession(dispatch, session);
  };

  return (
    <Slide
      direction="up"
      timeout={600}
      in={hasCards && !hasGameEnded}
      exit={!hasCards || hasGameEnded}
    >
      <PlayerHand onCardSelect={onSelect} />
    </Slide>
  );
};

export default Player;
