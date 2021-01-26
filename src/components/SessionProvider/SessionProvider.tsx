import React, {ReactElement, ReactNode, useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';

import { Session } from "../../store/types";
import { createSession } from "../../common/api";
import { setSession } from "../../store/session/actions";

type Props = {
    children: ReactNode;
};

const SessionProvider = ({ children }: Props) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(true);
        createSession()
            .then((session: Session) => {
                dispatch(setSession(session));
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <Typography>Loading Session...</Typography>;
    }
    return children as ReactElement;
};

export default SessionProvider;
