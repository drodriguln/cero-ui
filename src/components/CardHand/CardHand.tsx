import React, { forwardRef, ReactElement, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Grid, Grow, makeStyles } from '@material-ui/core';

import CardMat from '../CardContainer';
import Paginator, { PaginatorClasses } from './Paginator';

type Props = {
  children: ReactElement[];
  isActive?: boolean;
  isSelectable?: boolean;
  className?: string;
  PaginatorProps?: {
    classes?: PaginatorClasses;
  };
};

type StyleProps = {
  isActive: boolean;
};

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
  selectableCard: {
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
  nonSelectableCard: {
    padding: 2,
  },
});

const MAX_CARDS_PER_PAGE = 7;

const CardHand = forwardRef((props: Props, ref) => {
  const { children, isActive = false, isSelectable = false, className, PaginatorProps } = props;
  const classes = useStyles({ isActive });
  const [page, setPage] = useState(1);

  const numberOfCards = React.Children.count(children);
  const lastPage = Math.ceil(numberOfCards / MAX_CARDS_PER_PAGE);

  // Automatically show last page when drawing a card or playing last card on a page
  const [previousCardsCount, setPreviousCardsCount] = useState(numberOfCards);
  useEffect(() => {
    if (
      previousCardsCount < numberOfCards ||
      previousCardsCount > numberOfCards && numberOfCards % MAX_CARDS_PER_PAGE === 0
    ) {
      setPage(lastPage);
    }
    setPreviousCardsCount(numberOfCards);
  }, [numberOfCards]);

  return (
    <CardMat ref={ref} className={classNames(classes.root, className)} zIndex={isActive ? 1 : 2} raised={isActive}>
      <Paginator page={page} lastPage={lastPage} onChange={(pageNum: number) => setPage(pageNum)} {...PaginatorProps}>
        <Grid container wrap="nowrap" className={classes.cards}>
          {(React.Children.toArray(children) as ReactElement[])
            .slice((page - 1) * MAX_CARDS_PER_PAGE, page * MAX_CARDS_PER_PAGE)
            .map((child) => (
              <Grid
                key={child?.key}
                item
                className={isSelectable ? classes.selectableCard : classes.nonSelectableCard}
              >
                <Grow timeout={400} in>
                  {child}
                </Grow>
              </Grid>
            ))}
        </Grid>
      </Paginator>
    </CardMat>
  );
});

export default CardHand;
