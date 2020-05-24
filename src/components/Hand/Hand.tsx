import React from 'react';
import classNames from 'classnames';
import { Grid, Grow, makeStyles } from '@material-ui/core';

import { useSelector } from 'react-redux';
import CardMat from '../CardMat';
import Card from '../Card';
import Paginator from './Paginator';
import { CardData } from '../../store/types';
import { playerSelector } from '../../store/player/selector';
import { opponentSelector } from '../../store/opponent/selector';

type HandType = 'player' | 'opponent';

type Props = {
  cards: CardData[];
  type: HandType;
  onCardSelect: (card: CardData) => void;
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
    zIndex: 1,
  }),
  cards: {
    padding: '10px 5px',
  },
  card: {
    cursor: 'pointer',
    transition: 'transform .1s ease-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    '&:active': {
      transform: 'scale(0.95)',
    },
  },
});

const Hand = React.forwardRef((props: Props, ref) => {
  const {
    cards, type, onCardSelect, className,
  } = props;
  const { activity: playerActivity } = useSelector(playerSelector);
  const { activity: opponentActivity } = useSelector(opponentSelector);
  const isActive = type === 'player' && (playerActivity === 'start' || playerActivity === 'draw')
    || type === 'opponent' && (opponentActivity === 'start' || opponentActivity === 'draw');
  const classes = useStyles({ isActive });
  const [page, setPage] = React.useState(1);
  const maxCardsPerPage = 7;
  const lastPage = Math.ceil(cards?.length / maxCardsPerPage);

  // Automatically show last page when drawing a card or playing last card on a page
  const [previousCardsCount, setPreviousCardsCount] = React.useState(cards.length);
  React.useEffect(() => {
    if (
      previousCardsCount < cards.length
      || previousCardsCount > cards.length && cards.length % maxCardsPerPage === 0
    ) {
      setPage(lastPage);
    }
    setPreviousCardsCount(cards.length);
  }, [cards.length]);

  return (
    <CardMat ref={ref} className={classNames(classes.root, className)} raised={isActive}>
      <Paginator page={page} lastPage={lastPage} onChange={(pageNum: number) => setPage(pageNum)}>
        <Grid container spacing={1} wrap="nowrap" className={classes.cards}>
          {cards
            ?.slice((page - 1) * maxCardsPerPage, page * maxCardsPerPage)
            .map((card) => (
              <Grid key={card.id} item className={type === 'player' ? classes.card : undefined}>
                <Grow timeout={400} in>
                  <Card
                    color={card.color}
                    value={card.value}
                    hidden={type === 'opponent'}
                    onClick={() => {
                      if (type === 'player' && playerActivity === 'start' && onCardSelect !== undefined) {
                        onCardSelect(card);
                      }
                    }}
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
