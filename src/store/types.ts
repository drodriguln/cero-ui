import { Dispatch as ReduxDispatch, AnyAction } from 'redux';

import { DeckStore } from './session/deck/reducer';
import { DiscardStore } from './session/discard/reducer';
import { OpponentStore } from './session/opponent/reducer';
import { PlayerStore } from './session/player/reducer';
import { IdStore } from './session/id/reducer';

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

export type SessionStore = {
  id: IdStore,
  deck: DeckStore,
  discard: DiscardStore,
  opponent: OpponentStore,
  player: PlayerStore,
}
export type Store = {
  session: SessionStore,
}

export type Dispatch = ReduxDispatch;
export type Action = AnyAction & {
  payload?: any;
}
