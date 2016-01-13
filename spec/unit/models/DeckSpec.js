import Deck from '../../../src/models/Deck'
import _ from 'lodash'

describe('Deck', function () {
    var deck;

    beforeEach(function() {
        deck = new Deck();
    });

    describe('#getCard', function () {
        it('draws each of the 52 cards', function() {
            var cards = [];

            _.times(52, function() {
                cards.push(deck.getCard());
            });

            expect(cards.length).toEqual(52);
            expect(cards).toContain({ number: 9, suit: 'hearts' });
            expect(cards).toContain({ number: 2, suit: 'spades' });
            expect(cards).toContain({ number: 13, suit: 'clubs' });
            expect(cards).toContain({ number: 1, suit: 'diamonds' });
        });
    });
});