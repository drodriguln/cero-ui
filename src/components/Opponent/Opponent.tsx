import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Slide } from '@material-ui/core';

import Hand from '../Hand';
import { CardData } from '../../store/types';
import { opponentSelector } from '../../store/opponent/selector';
import { playerSelector } from '../../store/player/selector';
import { deckTopCardSelector } from '../../store/deck/selector';
import { discardTopCardSelector } from '../../store/discard/selector';
import { addDiscardCard } from '../../store/discard/actions';
import { addOpponentCard, removeOpponentCard, setOpponentActivity } from '../../store/opponent/actions';
import { removeDeckCard } from '../../store/deck/actions';
import { setPlayerActivity } from '../../store/player/actions';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0
  }
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

  React.useEffect(() => {
    if (playerActivity === 'end') {
      dispatch(setOpponentActivity('start'));
    }
  }, [playerActivity]);

  React.useEffect(() => {
    if (opponentActivity === 'initialize' || opponentActivity === 'end') {
      return;
    } else if (opponentActivity === 'skipped') {
      dispatch(setOpponentActivity('end'));
      return;
    } else if (opponentActivity === 'draw') {
      dispatch(setOpponentActivity('start'));
      return;
    }

    const card = cards.find((card) => (
      card.value === topDiscardCard?.value || card.color === topDiscardCard?.color
    ));

    if (card === undefined) {
      drawCard();
    } else {
      setTimeout(() => {
        placeCard(card);
      }, 1000);
    }

  }, [opponentActivity]);

  const drawCard = () => {
    if (topDeckCard === undefined) return;
    dispatch(setOpponentActivity('draw'));
    dispatch(addOpponentCard(topDeckCard));
    dispatch(removeDeckCard);
  }

  const placeCard = (card: CardData) => {
    if (topDiscardCard?.value !== card.value && topDiscardCard?.color !== card.color) {
      return;
    }

    if (cards?.length === 1 && opponentActivity !== 'initialize') {
      dispatch(setOpponentActivity('won'));
      return;
    }

    dispatch(addDiscardCard(card));
    dispatch(removeOpponentCard(card.id));
    if (card.value === 'skip' || card.value === 'reverse') {
      dispatch(setPlayerActivity('skipped'));
    }
    dispatch(setOpponentActivity(hasCards ? 'end' : 'won'));
  }

  return (
    <Slide
      direction='down'
      timeout={600}
      in={hasCards && !hasGameEnded}
      exit={!hasCards || hasGameEnded}
    >
      <Hand cards={cards} onCardSelect={placeCard} className={classes.root} type='opponent' />
    </Slide>
  );
};

export default Opponent;