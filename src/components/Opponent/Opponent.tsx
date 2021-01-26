import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Slide } from '@material-ui/core';

import Hand from '../Hand';
import { CardData } from '../../store/types';
import { opponentSelector } from '../../store/session/opponent/selector';
import { playerSelector } from '../../store/session/player/selector';
import { discardSelector } from '../../store/session/discard/selector';
import { addDiscardCard } from '../../store/session/discard/actions';
import { removeOpponentCard, setOpponentActivity } from '../../store/session/opponent/actions';
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
  const discardCard = useSelector(discardSelector);
  const classes = useStyles();
  const hasCards = cards?.length !== 0;
  const hasGameEnded = opponentActivity === 'won' || playerActivity === 'won';

  const drawCard = () => {
    //Replace with draw API endpoint
    /*
    if (topDeckCard === undefined) return;
    dispatch(setOpponentActivity('draw'));
    dispatch(addOpponentCard(topDeckCard));
    dispatch(removeDeckCard());
     */
  };

  const placeCard = (card: CardData) => {
    if (discardCard?.value !== card.value && discardCard?.color !== card.color) {
      return;
    }

    if (cards?.length === 1 && opponentActivity !== 'initialize') {
      dispatch(setOpponentActivity('won'));
      return;
    }

    dispatch(addDiscardCard(card));
    dispatch(removeOpponentCard(card.id));
    dispatch(setOpponentActivity(hasCards ? 'end' : 'won'));
    if (card.value === 'skip' || card.value === 'reverse') {
      dispatch(setPlayerActivity('skipped'));
    } else {
      /*
      updateSession(session)
        .then(() => {
          dispatch(setPlayerActivity('start'))
        });

       */
    }
  };

  useEffect(() => {
    if (opponentActivity === 'initialize' || opponentActivity === 'end') {
      return;
    } if (opponentActivity === 'skipped') {
      dispatch(setOpponentActivity('end'));
      /*
      updateSession(session)
        .then(() => {
          dispatch(setPlayerActivity('start'))
        });

       */
      return;
    } if (opponentActivity === 'draw') {
      dispatch(setOpponentActivity('start'));
      return;
    }

    const card = cards.find((c) => (
      c.value === discardCard?.value || c.color === discardCard?.color
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
