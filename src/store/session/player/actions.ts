import { Activity } from '../../types';
import { Player } from "./reducer";

export enum PlayerAction {
  SET_VALUE = 'PLAYER_SET_VALUE',
  SET_ACTIVITY = 'PLAYER_SET_ACTIVITY'
}

export const setPlayer = (player: Player) => ({ type: PlayerAction.SET_VALUE, payload: player });
export const setPlayerActivity = (activity: Activity) => ({ type: PlayerAction.SET_ACTIVITY, payload: activity });
