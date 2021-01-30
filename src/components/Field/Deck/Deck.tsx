import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';

import Card from '../../Card';
import { playerSelector } from '../../../store/session/player/selector';
import { idSelector } from "../../../store/session/id/selector";
import { setPlayer } from "../../../store/session/player/actions";
import { Player } from "../../../store/session/player/reducer";

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
  const { activity: playerActivity } = useSelector(playerSelector);
  const classes = useStyles();

  const onClick = async () => {
    if (playerActivity !== 'start') {
      return;
    }
    const player = await drawCard(sessionId, 'player');
    dispatch(setPlayer(player));

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
      onClick={onClick}
    />
  );
};

export default Deck;
