import React, { forwardRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Grid, Grow, makeStyles } from '@material-ui/core';

import { useSelector } from 'react-redux';
import CardMat from '../CardMat';
import Card from '../Card';
import Paginator from './Paginator';
import { CardData } from '../../types';
import { playerSelector } from '../../store/session/player/selector';
import { opponentSelector } from '../../store/session/opponent/selector';
import { Status } from '../../enum';

type HandType = 'player' | 'opponent';

type Props = {
  cards: CardData[];
  type: HandType;
  onCardSelect?: (card: CardData) => void;
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
    padding: 2,
    transition: 'transform .1s ease-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    '&:active': {
      transform: 'scale(0.95)',
    },
  },
});

const Hand = forwardRef((props: Props, ref) => {
  const {
    cards = [], type, onCardSelect, className,
  } = props;
  const { status: playerStatus } = useSelector(playerSelector);
  const { status: opponentStatus } = useSelector(opponentSelector);
  const isActive = type === 'player' && (playerStatus === Status.START)
    || type === 'opponent' && (opponentStatus === Status.START);
  const zIndex = type === 'opponent' ? 1 : 2;
  const classes = useStyles({ isActive });
  const [page, setPage] = useState(1);
  const maxCardsPerPage = 7;
  const lastPage = Math.ceil(cards?.length / maxCardsPerPage);

  // Automatically show last page when drawing a card or playing last card on a page
  const [previousCardsCount, setPreviousCardsCount] = useState(cards.length);
  useEffect(() => {
    if (
      previousCardsCount < cards.length
      || previousCardsCount > cards.length && cards.length % maxCardsPerPage === 0
    ) {
      setPage(lastPage);
    }
    setPreviousCardsCount(cards.length);
  }, [cards.length]);

  return (
    <CardMat ref={ref} className={classNames(classes.root, className)} zIndex={zIndex} raised={isActive}>
      <Paginator page={page} lastPage={lastPage} onChange={(pageNum: number) => setPage(pageNum)}>
        <Grid container wrap="nowrap" className={classes.cards}>
          {cards
            .slice((page - 1) * maxCardsPerPage, page * maxCardsPerPage)
            .map((card) => (
              <Grid key={card.id} item className={type === 'player' ? classes.card : undefined}>
                <Grow timeout={400} in>
                  <Card
                    color={card.color}
                    value={card.value}
                    hidden={type === 'opponent'}
                    onClick={() => {
                      if (type === 'player' && playerStatus === Status.START) {
                        onCardSelect?.(card);
                      }
                    }}
                  />
                </Grow>
              </Grid>
            ))}
        </Grid>
      </Paginator>
    </CardMat>
  );
});

export default Hand;
