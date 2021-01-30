import { Dispatch as ReduxDispatch, AnyAction } from 'redux';

import { Discard } from './session/discard/reducer';
import { Opponent } from './session/opponent/reducer';
import { Player } from './session/player/reducer';
import { Id } from './session/id/reducer';

export type CardValue = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'reverse' | 'skip';
export type CardColor = 'blue' | 'green' | 'red' | 'yellow';
export type CardSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type CardDimensions = {
  height: number;
  width: number;
}
export type CardData = {
  id: number;
  color: CardColor;
  value: CardValue;
}

export type Activity = 'initialize' | 'start' | 'draw' | 'skipped' | 'end' | 'won';

export type Session = {
  id: Id,
  discard: Discard,
  opponent: Opponent,
  player: Player,
}
export type Store = {
  session: Session,
}

export type Dispatch = ReduxDispatch;
export type Action = AnyAction & {
  payload?: any;
}
