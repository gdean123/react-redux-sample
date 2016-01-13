import _ from 'lodash'
import { knuthShuffle } from 'knuth-shuffle'

export default class Deck {
    constructor() {
        const numbers = _.range(1, 14);
        const suits = ['spades', 'hearts', 'clubs', 'diamonds'];
        let cards = [];

        for (let number of numbers) {
            for (let suit of suits) {
                cards.push({ number: number, suit: suit });
            }
        }

        this.cards = knuthShuffle(cards);
    }

    getCard() {
        return this.cards.pop();
    }
}
