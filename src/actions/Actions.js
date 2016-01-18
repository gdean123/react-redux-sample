import { START_GAME, HIT } from '../constants/ActionTypes'

export function startGame() {
  return {
    type: START_GAME
  }
}

export function hit() {
  return {
    type: HIT
  }
}
