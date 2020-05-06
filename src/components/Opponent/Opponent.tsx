import React from 'react';
import { Grid, makeStyles, Slide } from '@material-ui/core';

import { CeroCard } from '../../store/types';
import Card from '../Card';
import Hand from '../Hand';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  card: {
    animation: '0.6s ease-out 0s 1 $onLoadSlideDown'
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

const initialCards: CeroCard[] = [
  { id: 200, color: 'blue', value: '0' },
  { id: 201, color: 'green', value: '1' },
  { id: 202, color: 'red', value: '2' },
  { id: 203, color: 'yellow', value: '3' },
  { id: 204, color: 'blue', value: '4' },
  { id: 205, color: 'green', value: 'reverse' },
  { id: 206, color: 'red', value: 'skip' }
];

const Opponent = () => {
  const [cards] = React.useState(initialCards);
  const classes = useStyles();

  return (
    <Slide direction='right' timeout={600} in>
      <Hand className={classes.root}>
        <Grid container spacing={1} wrap='nowrap'>
          {cards.map(({ id, color, value }) => (
            <Grid key={id} item>
              <Card
                color={color}
                value={value}
                className={classes.card}
                hidden
              />
            </Grid>
          ))}
        </Grid>
      </Hand>
    </Slide>
  );
};

export default Opponent;