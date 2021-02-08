import { Player } from '../../../types';

export enum OpponentAction {
  SET_VALUE = 'OPPONENT_SET_VALUE',
}

export const setOpponent = (opponent: Player) => ({ type: OpponentAction.SET_VALUE, payload: opponent });