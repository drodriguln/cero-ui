import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, makeStyles, Slide } from '@material-ui/core';

import { playerSelector } from '../../store/player/selector';
import Card from '../Card';
import Hand from '../Hand';
import { CardData } from '../../store/types';
import { removePlayerCard } from '../../store/player/actions';
import { addDiscardCard } from '../../store/discard/actions';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  card: {
    cursor: 'pointer',
    animation: '0.6s ease-out 0s 1 $onLoadSlideDown',
    transition: 'transform .2s ease-out',
    '&:hover': {
      transform: 'translateY(-15%)'
    }
  },
  '@keyframes onLoadSlideDown': {
    '0%': {
      transform: 'translateY(-20%)'
    },
    '100%': {
      transform: 'translateY(0)'
    }
  }
});

const Player = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector(playerSelector)
  const classes = useStyles();

  const placeCard = (card: CardData) => {
    dispatch(addDiscardCard(card))
    dispatch(removePlayerCard(card.id))
  }

  return (
    <Slide direction='left' timeout={600} in>
      <Hand className={classes.root}>
        <Grid container spacing={1} wrap='nowrap'>
          {cards.map((card) => (
            <Grid key={card.id} item>
              <Card
                color={card.color}
                value={card.value}
                className={classes.card}
                onClick={() => placeCard(card)}
              />
            </Grid>
          ))}
        </Grid>
      </Hand>
    </Slide>
  );
};

export default Player;