import React from 'react';
import { Fade, Grid, makeStyles } from '@material-ui/core';

import Card from '../Card';
import { CardData } from '../../store/types';
import CardMat from '../CardMat';

type HandType = 'player' | 'opponent';

type Props = {
  cards: CardData[];
  type: HandType;
}

type StyleProps = {
  type: HandType;
}

const useStyles = makeStyles({
  root: ({ type }: StyleProps) => ({
    position: 'absolute',
    top: type === 'opponent' ? 0 : undefined,
    right: type === 'player' ? 0 : undefined,
    bottom: type === 'player' ? 0 : undefined,
    left: type === 'opponent' ? 0 : undefined,
    margin: 10,
    maxWidth: 'calc(100% - 40px)', // strip margin and padding
    overflow: 'visible',
    backgroundColor: 'rgba(255, 255, 255, 0.40)',
    zIndex: 1
  }),
  card: {
    cursor: 'pointer',
    transition: 'transform .2s ease-out',
    '&:hover': {
      transform: 'translate(0, -15%)'
    }
  }
});

const Hand = React.forwardRef(({ cards, type }: Props, ref) => {
  const classes = useStyles({ type });
  return (
    <CardMat ref={ref} className={classes.root} raised>
      <Grid container spacing={1} wrap='nowrap'>
        {cards.map(({ color, value }, index) => (
          <Fade key={index} timeout={1500} in>
            <Grid item>
              <Card
                color={color}
                value={value}
                hidden={type === 'opponent'}
                className={type === 'player' ? classes.card : undefined}
              />
            </Grid>
          </Fade>
        ))}
      </Grid>
    </CardMat>
  );
});

export default Hand;