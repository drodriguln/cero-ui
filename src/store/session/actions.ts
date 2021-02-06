import { setPlayer } from "./player/actions";
import { setOpponent } from "./opponent/actions";
import { setDiscard } from "./discard/actions";
import { Dispatch } from '../types';
import { Session } from '../../types';

export const setSession = (dispatch: Dispatch, session: Session) => {
  dispatch(setPlayer(session.player));
  dispatch(setOpponent(session.opponent));
  dispatch(setDiscard(session.discard));
};
