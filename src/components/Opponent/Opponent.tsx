import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Slide } from '@material-ui/core';

import Hand from '../Hand';
import { CardData } from '../../store/types';
import { opponentSelector } from '../../store/session/opponent/selector';
import { playerSelector } from '../../store/session/player/selector';
import { deckTopCardSelector } from '../../store/session/deck/selector';
import { discardTopCardSelector } from '../../store/session/discard/selector';
import { addDiscardCard } from '../../store/session/discard/actions';
import { addOpponentCard, removeOpponentCard, setOpponentActivity } from '../../store/session/opponent/actions';
import { removeDeckCard } from '../../store/session/deck/actions';
import { setPlayerActivity } from '../../store/session/player/actions';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

const Opponent = () => {
  const dispatch = useDispatch();
  const { cards, activity: opponentActivity } = useSelector(opponentSelector);
  const { activity: playerActivity } = useSelector(playerSelector);
  const topDiscardCard = useSelector(discardTopCardSelector);
  const topDeckCard = useSelector(deckTopCardSelector);
  const classes = useStyles();
  const hasCards = cards?.length !== 0;
  const hasGameEnded = opponentActivity === 'won' || playerActivity === 'won';

  const drawCard = () => {
    if (topDeckCard === undefined) return;
    dispatch(setOpponentActivity('draw'));
    dispatch(addOpponentCard(topDeckCard));
    dispatch(removeDeckCard);
  };

  const placeCard = (card: CardData) => {
    if (topDiscardCard?.value !== card.value && topDiscardCard?.color !== card.color) {
      return;
    }

    if (cards?.length === 1 && opponentActivity !== 'initialize') {
      dispatch(setOpponentActivity('won'));
      return;
    }

    const doSkipPlayer = card.value === 'skip' || card.value === 'reverse';
    dispatch(addDiscardCard(card));
    dispatch(removeOpponentCard(card.id));
    dispatch(setOpponentActivity(hasCards ? 'end' : 'won'));
    dispatch(setPlayerActivity(doSkipPlayer ? 'skipped' : 'start'));
  };

  useEffect(() => {
    if (opponentActivity === 'initialize' || opponentActivity === 'end') {
      return;
    } if (opponentActivity === 'skipped') {
      dispatch(setOpponentActivity('end'));
      dispatch(setPlayerActivity('start'));
      return;
    } if (opponentActivity === 'draw') {
      dispatch(setOpponentActivity('start'));
      return;
    }

    const card = cards.find((c) => (
      c.value === topDiscardCard?.value || c.color === topDiscardCard?.color
    ));

    if (card === undefined) {
      drawCard();
    } else {
      setTimeout(() => {
        placeCard(card);
      }, 1000);
    }
  }, [opponentActivity]);

  return (
    <Slide
      direction="down"
      timeout={600}
      in={hasCards && !hasGameEnded}
      exit={!hasCards || hasGameEnded}
    >
      <Hand cards={cards} onCardSelect={placeCard} className={classes.root} type="opponent" />
    </Slide>
  );
};

export default Opponent;
