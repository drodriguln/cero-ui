import { CeroCard } from '../types';

export enum PlayerAction {
  ADD_CARD = 'PLAYER_ADD_CARD',
  ADD_CARDS = 'PLAYER_ADD_CARDS',
  REMOVE_CARD = 'PLAYER_REMOVE_CARD'
}

export const addCard = (payload: CeroCard) => ({ type: PlayerAction.ADD_CARD, payload: payload });
export const addCards = (payload: CeroCard[]) => ({ type: PlayerAction.ADD_CARDS, payload: payload });
export const removeCard = (payload: CeroCard) => ({ type: PlayerAction.REMOVE_CARD, payload: payload });