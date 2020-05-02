import React from 'react';
import { Card as MuiCard, Fade, Grid, makeStyles } from '@material-ui/core';

import Card from '../Card';
import { CardData } from '../Card/types';

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
    padding: 10,
    maxWidth: 'calc(100% - 40px)', // strip margin and padding
    overflowX: 'auto'
  })
});

const Hand = React.forwardRef(({ cards, type }: Props, ref) => {
  const classes = useStyles({ type });
  return (
    <MuiCard ref={ref} className={classes.root} raised>
      <Grid container spacing={1} wrap='nowrap'>
        {cards.map(({ color, value }, index) => (
          <Fade key={index} timeout={1500} in>
            <Grid key={index} item>
              <Card color={color} value={value} hidden={type === 'opponent'} />
            </Grid>
          </Fade>
        ))}
      </Grid>
    </MuiCard>
  );
});

export default Hand;