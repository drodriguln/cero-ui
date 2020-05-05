import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';

import { selectDeck } from '../../../store/deck/selector';
import Card from '../../Card';
import { removeCard as removeDeckCard} from '../../../store/deck/actions';
import { addCard as addPlayerCard } from '../../../store/player/actions';

const useStyles = makeStyles({
  root: {
    cursor: 'pointer',
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  }
});

const Deck = () => {
  const dispatch = useDispatch();
  const deck = useSelector(selectDeck)
  const classes = useStyles();

  const draw = () => {
    const [ topCard ] = deck?.slice(-1);
    if (topCard === undefined) return;
    dispatch(removeDeckCard)
    dispatch(addPlayerCard(topCard))
  }

  return <Card color='blue' value='0' size='lg' hidden className={classes.root} onClick={draw} />;
};

export default Deck;