import { Session } from '../types';

export enum SessionAction {
  SET_VALUE = "SESSION_SET_VAKYE",
}

export const setSession = (session: Session) => ({ type: SessionAction.SET_VALUE, payload: session });
