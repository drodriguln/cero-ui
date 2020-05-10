import React from 'react';
import classNames from 'classnames';
import { Grid, Grow, makeStyles } from '@material-ui/core';

import CardMat from '../CardMat';
import Card from '../Card';
import Paginator from './Paginator';
import { CardData } from '../../store/types';

type Props = {
  cards: CardData[];
  onCardSelect?: (card: CardData) => void;
  hidden?: boolean;
  className?: string;
}

const useStyles = makeStyles({
  root: {
    margin: 10,
    maxWidth: 'calc(100% - 40px)', // strip margin and padding
    overflow: 'visible',
    backgroundColor: 'rgba(40, 40, 40, 0.2)',
    zIndex: 1
  },
  cards: {
    padding: '10px 5px'
  },
  card: {
    cursor: 'pointer',
    transition: 'transform .1s ease-out',
    '&:hover': {
      transform: 'translateY(-15%)'
    }
  },
});

const Hand = React.forwardRef(({ cards, onCardSelect, hidden = false, className }: Props, ref) => {
  const classes = useStyles();
  const [ page, setPage ] = React.useState(1);
  const maxCardsPerPage = 7;
  const lastPage = Math.ceil(cards?.length / maxCardsPerPage);

  // Automatically show last page when drawing a card or playing last card on a page
  const [ previousCardsCount, setPreviousCardsCount ] = React.useState(cards.length);
  React.useEffect(() => {
    if (
      previousCardsCount < cards.length ||
      previousCardsCount > cards.length && cards.length % maxCardsPerPage === 0
    ) {
      setPage(lastPage)
    }
    setPreviousCardsCount(cards.length);
  }, [cards.length]);

  return (
    <CardMat ref={ref} className={classNames(classes.root, className)}>
      <Paginator page={page} lastPage={lastPage} onChange={(page: number) => setPage(page)}>
        <Grid container spacing={1} wrap='nowrap' className={classes.cards}>
          {cards
            ?.slice((page - 1) * maxCardsPerPage, page * maxCardsPerPage)
            .map((card) => (
              <Grid key={card.id} item className={classes.card}>
                <Grow timeout={400} in>
                  <Card
                    color={card.color}
                    value={card.value}
                    onClick={() => onCardSelect !== undefined && onCardSelect(card)}
                    hidden={hidden}
                  />
                </Grow>
              </Grid>
            )
          )}
        </Grid>
      </Paginator>
    </CardMat>
  );
});

export default Hand;