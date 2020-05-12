import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Slide } from '@material-ui/core';

import Hand from '../Hand';
import { CardData } from '../../store/types';
import { opponentSelector } from '../../store/opponent/selector';
import { deckTopCardSelector } from '../../store/deck/selector';
import { discardTopCardSelector } from '../../store/discard/selector';
import { addDiscardCard } from '../../store/discard/actions';
import { setPlayerActivity } from '../../store/player/actions';
import { addOpponentCard, removeOpponentCard, setOpponentActivity } from '../../store/opponent/actions';
import { removeDeckCard } from '../../store/deck/actions';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0
  }
});

const Opponent = () => {
  const dispatch = useDispatch();
  const { cards, isActive } = useSelector(opponentSelector);
  const topDiscardCard = useSelector(discardTopCardSelector);
  const topDeckCard = useSelector(deckTopCardSelector);
  const classes = useStyles();
  const hasCards = cards?.length === 0;

  React.useEffect(() => {
    if (!isActive) return;

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

  }, [isActive, topDeckCard]); // i.e. topDeckCard = opponent drew from f

  const drawCard = () => {
    if (topDeckCard === undefined) return;
    dispatch(addOpponentCard(topDeckCard))
    dispatch(removeDeckCard)
  }

  const placeCard = (card: CardData) => {
    if (topDiscardCard?.value !== card.value && topDiscardCard?.color !== card.color) {
      return;
    }

    dispatch(addDiscardCard(card));
    dispatch(removeOpponentCard(card.id));
    dispatch(setOpponentActivity(false));
    dispatch(setPlayerActivity(true));
  }

  return (
    <Slide direction='down' timeout={600} in={!hasCards} exit={!hasCards}>
      <Hand
        cards={cards}
        onCardSelect={placeCard}
        isActive={isActive}
        className={classes.root}
        hidden
      />
    </Slide>
  );
};

export default Opponent;