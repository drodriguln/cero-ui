import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';

import { ApiSession } from "../../store/types";
import { createSession } from "../../common/api";
import { setPlayer } from "../../store/session/player/actions";
import { setOpponent } from "../../store/session/opponent/actions";
import { setId } from "../../store/session/id/actions";
import { setDiscard } from "../../store/session/discard/actions";

type Props = {
  children: ReactNode;
};

const SessionProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    createSession()
      .then((session: ApiSession) => {
        dispatch(setId(session.id))
        dispatch(setPlayer(session.player));
        dispatch(setOpponent(session.opponent));
        dispatch(setDiscard(session.discard.cards[0]));
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Typography>Loading Session...</Typography>;
  }
  return children as ReactElement;
};

export default SessionProvider;
