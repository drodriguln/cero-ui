import React, { forwardRef } from 'react';

import { PlayerStatus } from "../../../enum";
import Card from "../../Card";
import CardHand from "../../CardHand";
import { useOpponent } from "../../../store/session/opponent/selector";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

const createHiddenCards = (count: number) => {
  return [...new Array(count)]
    .map((item, index) => <Card.Hidden key={index} />);
};

const OpponentHand = forwardRef(({}, ref) => {
  const { status, cardCount } = useOpponent();
  const cards = createHiddenCards(cardCount);
  const classes = useStyles();

  return (
    <CardHand ref={ref} className={classes.root} isActive={status === PlayerStatus.START}>
      {cards}
    </CardHand>
  );
});

export default OpponentHand;