import React from 'react';
import { Grid, Grow, makeStyles, Slide } from '@material-ui/core';

import Card from '../Card';
import Hand from '../Hand';
import { useSelector } from 'react-redux';
import { opponentSelector } from '../../store/opponent/selector';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0
  }
});

const Opponent = () => {
  const { cards } = useSelector(opponentSelector)
  const classes = useStyles();
  const hasCards = cards?.length === 0;

  return (
    <Slide direction='down' timeout={600} in={!hasCards} exit={!hasCards}>
      <Hand className={classes.root}>
        <Grid container spacing={1} wrap='nowrap'>
          {cards.map(({ id, color, value }) => (
            <Grid key={id} item>
              <Grow timeout={400} in>
                <Card color={color} value={value} hidden />
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Hand>
    </Slide>
  );
};

export default Opponent;