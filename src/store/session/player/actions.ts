import { PlayerStatus } from '../../../enum';
import { CardData, Player } from '../../../types';

export enum PlayerAction {
  SET_VALUE = 'PLAYER_SET_VALUE',
  SET_STATUS = 'PLAYER_SET_STATUS',
  REMOVE_CARD = 'PLAYER_REMOVE_CARD',
}

export const setPlayer = (player: Player) => ({ type: PlayerAction.SET_VALUE, payload: player });
export const setPlayerStatus = (status: PlayerStatus) => ({ type: PlayerAction.SET_STATUS, payload: status });
export const removePlayerCard = (card: CardData) => ({ type: PlayerAction.REMOVE_CARD, payload: card });
