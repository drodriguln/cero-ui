import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Grow, makeStyles, Slide } from '@material-ui/core';

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
    transition: 'transform .1s ease-out',
    '&:hover': {
      transform: 'translateY(-15%)'
    }
  },
  winMessage: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
    color: 'yellow'
  }
});

const Player = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector(playerSelector)
  const classes = useStyles();
  const hasCards = cards?.length === 0;

  const placeCard = (card: CardData) => {
    dispatch(addDiscardCard(card))
    dispatch(removePlayerCard(card.id))
  }

  return (
    <Slide direction='up' timeout={600} in={!hasCards} exit={!hasCards}>
      <Hand className={classes.root}>
        <Grid container spacing={1} wrap='nowrap'>
          {cards.map((card) => (
            <Grid key={card.id} item className={classes.card}>
              <Grow timeout={400} in>
                <Card
                  color={card.color}
                  value={card.value}
                  onClick={() => placeCard(card)}
                />
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Hand>
    </Slide>
  );
};

export default Player;