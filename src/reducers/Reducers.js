import { START_GAME } from '../constants/ActionTypes'
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
                playerHand: _.range(2).map(function() { return deck.getCard() })
            }
    }

    return state;
}