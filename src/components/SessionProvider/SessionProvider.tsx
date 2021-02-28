import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';

import { setSession } from "../../store/session/actions";
import { Session } from '../../types';

type Props = {
  children: ReactNode;
};

const createSession = (): Promise<Session> => {
  return fetch('/api/sessions', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json());
}

const SessionProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    createSession()
      .then((session: Session) => {
        setSession(dispatch, session);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Typography>Loading Session...</Typography>;
  }
  return children as ReactElement;
};

export default SessionProvider;
