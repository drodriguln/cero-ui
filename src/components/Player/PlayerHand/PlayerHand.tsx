import React, { forwardRef } from 'react';

import { PlayerStatus } from "../../../enum";
import Card from "../../Card";
import { usePlayer } from "../../../store/session/player/selector";
import CardHand from "../../CardHand";
import { CardData } from "../../../types";
import { makeStyles } from "@material-ui/core";

type Props = {
  onCardSelect: (card: CardData) => void;
}

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

const PlayerHand = forwardRef(({ onCardSelect }: Props, ref) => {
  const { status, cards } = usePlayer();
  const classes = useStyles();

  return (
    <CardHand ref={ref} className={classes.root} isActive={status === PlayerStatus.START} isSelectable>
      {cards.map((card) => (
        <Card
          key={card.id}
          color={card.color}
          value={card.value}
          onClick={() => {
            if (status === PlayerStatus.START) {
              onCardSelect?.(card);
            }
          }}
        />
      ))}
    </CardHand>
  );
});

export default PlayerHand;