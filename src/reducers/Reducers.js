import _ from 'lodash';
import { START_GAME, HIT } from '../constants/ActionTypes'
import Deck from '../models/Deck'

const initialState = {
  gameStarted: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      let deck = new Deck();
      return {
        ...state,
        gameStarted: true,
        playerHand: _.range(2).map(function () {
          return deck.getCard()
        }),
        dealerHand: _.range(2).map(function () {
          return deck.getCard()
        }),
        deck: deck
      };

    case HIT:
      var newPlayerHand = state.playerHand.concat(state.deck.cards[0]);
      var newDeck = state.deck.cards.slice(1);
      return {
        ...state,
        playerHand: newPlayerHand,
        deck: newDeck
      };

    default:
      return state;
  }
}
