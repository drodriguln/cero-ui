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
  isActive?: boolean;
  hidden?: boolean;
  className?: string;
}

type StyleProps = {
  isActive: boolean;
}

const useStyles = makeStyles({
  root: ({ isActive }: StyleProps) => ({
    margin: 10,
    maxWidth: 'calc(100% - 20px)', // strip margin and padding
    backgroundColor: `rgba(40, 40, 40, ${isActive ? 0.15 : 0.1})`,
    zIndex: 1
  }),
  cards: {
    padding: '10px 5px'
  },
  card: {
    cursor: 'pointer',
    transition: 'transform .1s ease-out',
    '&:hover': {
      transform: 'translateY(-5%)'
    }
  },
});

const Hand = React.forwardRef((props: Props, ref) => {
  const { cards, onCardSelect, isActive = false, hidden = false, className } = props;
  const classes = useStyles({ isActive });
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
    <CardMat ref={ref} className={classNames(classes.root, className)} raised={isActive}>
      <Paginator page={page} lastPage={lastPage} onChange={(page: number) => setPage(page)}>
        <Grid container spacing={1} wrap='nowrap' className={classes.cards}>
          {cards
            ?.slice((page - 1) * maxCardsPerPage, page * maxCardsPerPage)
            .map((card) => (
              <Grid key={card.id} item className={isActive ? classes.card : undefined}>
                <Grow timeout={400} in>
                  <Card
                    color={card.color}
                    value={card.value}
                    onClick={() => isActive && onCardSelect !== undefined && onCardSelect(card)}
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