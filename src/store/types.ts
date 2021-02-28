import { AnyAction, Dispatch as ReduxDispatch } from 'redux';
import { Session } from '../types';

export type Store = {
  session: Session,
}

export type Dispatch = ReduxDispatch;
export type Action = AnyAction & {
  payload?: any;
}