import { Activity, CardData } from '../../types';
import { PlayerStore } from "./reducer";

export enum PlayerAction {
  SET_VALUE = 'PLAYER_SET_VALUE',
  ADD_CARD = 'PLAYER_ADD_CARD',
  ADD_CARDS = 'PLAYER_ADD_CARDS',
  REMOVE_CARD = 'PLAYER_REMOVE_CARD',
  SET_ACTIVITY = 'PLAYER_SET_ACTIVITY'
}

export const setPlayer = (player: PlayerStore) => ({ type: PlayerAction.SET_VALUE, payload: player });
export const addPlayerCard = (card: CardData) => ({ type: PlayerAction.ADD_CARD, payload: card });
export const addPlayerCards = (cards: CardData[]) => ({ type: PlayerAction.ADD_CARDS, payload: cards });
export const removePlayerCard = (id: number) => ({ type: PlayerAction.REMOVE_CARD, payload: id });
export const setPlayerActivity = (activity: Activity) => ({ type: PlayerAction.SET_ACTIVITY, payload: activity });
